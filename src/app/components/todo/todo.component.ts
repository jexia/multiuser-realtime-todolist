import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { moveItemInArray, CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { filter, tap, switchMap } from 'rxjs/operators';

import { TodoService } from 'src/app/services/todo.service';
import { AddTodoRequestObject } from 'src/app/interfaces/todo';

import * as moment from 'moment';
import { MatDialog } from '@angular/material';
import { ProfileComponent } from '../profile/profile.component';
import { AuthService } from 'src/app/services/auth.service';
import { UserProfileResponseObject } from 'src/app/interfaces/auth';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  form: FormGroup;
  todos: any[];
  users: UserProfileResponseObject[] = [];
  connectedTo: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private dialogService: MatDialog,
    private authService: AuthService,
    private todoService: TodoService,
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      todo: [null, Validators.required],
      date: null,
      user_id: [null, Validators.required]
    });

    this.authService.getUser().pipe(
      tap(user =>  this.form.get('user_id').setValue(user.id)),
      switchMap(user => this.authService.getUserProfile(user.id))
    ).subscribe(profile => {
      if (!profile.length) {
        this.dialogService.open(ProfileComponent, {disableClose: true});
      }
    });

    this.authService.getUsers().subscribe(response => this.users = response);

    this.todoService.todos$.pipe(
      filter(todos => !!todos),
    ).subscribe(todos => {

      for (const list of todos) {
        this.connectedTo.push(list.id);
      }

      this.todos = todos;
    });

    this.todoService.getTodos();
    this.todoService.subscribeToTodos();
  }

  addTodo() {
    const todo = this.form.value as AddTodoRequestObject;

    this.todoService.addTodo(todo).subscribe(response => {
      this.form.get('todo').reset();
      this.form.get('date').reset();
    });
  }

  markAsCompleted(todo: any) {
    // console.log(todo)
    todo.completed = !todo.completed;
    this.todoService.markAsCompleted(todo).subscribe(response => {
      // console.log(response)
    });
  }

  deleteTodo($event, item) {
    // console.log(item)
    $event.preventDefault();
    $event.stopImmediatePropagation();
    this.todoService.deleteTodo(item).subscribe(response => {
      // console.log('yo resposta', response)
    });
  }
  getUserName(userId: string) {
    const user = this.users.filter(x => x.user_id === userId)[0];
    return user ? `${user.first_name} ${user.last_name}` : null;
  }

  drop(ev: CdkDragDrop<any[]>, todos, date: string) {

    if (ev.previousContainer === ev.container) {
      // console.log('move-mos', ev, todos, date);
      moveItemInArray(ev.container.data, ev.previousIndex, ev.currentIndex);
    } else {
      // console.log('transfere-mos',ev.previousContainer.data[ev.previousIndex]);
      this.todoService.rescheduleTodo(ev.previousContainer.data[ev.previousIndex], date).subscribe(response => {
        // console.log(response)
      });
      transferArrayItem(ev.previousContainer.data, ev.container.data, ev.previousIndex, ev.currentIndex);
    }
  }

  checkPast(date: string) {
    return moment(date).isBefore(moment(), 'day');
  }

  trackDays(index, item) {
    return item.id;
  }

  checkAge(todo) {
    const seconds = moment().diff(moment(todo.created_at), 'seconds');
    return seconds < 60 ? true : false;
  }
}

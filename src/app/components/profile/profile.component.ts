import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialogRef } from '@angular/material';
import { Subscription } from 'rxjs';
import { UserProfileRequestObject } from 'src/app/interfaces/auth';
import { tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  form: FormGroup;
  private user$: Subscription;
  private update = false;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ProfileComponent>,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      first_name: [null, [
        Validators.required,
        Validators.minLength(3)
      ]],
      last_name: [null, [
        Validators.required,
        Validators.minLength(3)
      ]],
      user_id: [null, Validators.required]
    });
    this.user$ = this.authService.getUser().pipe(
      tap(user => this.form.get('user_id').setValue(user.id)),
      switchMap(user => this.authService.getUserProfile(user.id))
    ).subscribe(profile => {
      if (profile.length) {
        this.update = true;
        this.form.patchValue(profile[0]);
      }
    });
  }

  setProfile() {
    this.authService.setProfile(this.form.value as UserProfileRequestObject, this.update)
    .subscribe(() => {
      this.user$.unsubscribe();
      this.dialogRef.close();
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

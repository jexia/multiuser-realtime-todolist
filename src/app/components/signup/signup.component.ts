import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.required],
      confirm: [null, Validators.required],
    }, {validators: [this.checkPasswords]});
  }

  signup() {
    // this.router.navigate(['todo'])
    const user = this.form.value;
    delete user.confirm;
    this.authService.signUp(user).subscribe(response => {
      // console.log(response)
      this.router.navigate(['/signin']);
    });
  }

  checkPasswords(group: FormGroup) {
    const pass = group.get('password').value;
    const confirmPass = group.get('confirm').value;
    return pass === confirmPass ? null : { notSame: true };
  }
}

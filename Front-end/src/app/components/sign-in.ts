import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookiesService } from '../services/cookies.service';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login-dialog',
  template: `
  <!-- Login form -->
  <form   (ngSubmit)="submitSigninForm(signinForm.value)" [formGroup]='signinForm'class="col-6 card centerd">
      <p class="h5 text-center mb-4">Sign in</p>
      <div class="md-form">
          <input type="text" id="defaultForm-email" class="form-control" mdbActive formControlName='email'>
          <label for="defaultForm-email">Your email</label>
      </div>
      <div class="md-form">
          <input type="password" id="defaultForm-pass" class="form-control" mdbActive formControlName='password'>
          <label for="defaultForm-pass">Your password</label>
      </div>
      <div class='col-md-12 row'>
      <div  *ngIf="loginErr" class="alert alert-danger col-md-12 center-block" role="alert"> Error unknowen email or password.</div>
      </div>
      <div class="text-center">
          <button [disabled]="sending"  type="submit"
          class="btn btn-default waves-light" mdbRippleRadius>Login</button>
      </div>
  </form>
  <!-- Login form -->

  

  `,
  providers: [ AuthService , FormBuilder],
  styles: [ '.centerd{margin: 50px auto; padding: 35px;}' ],
})
export class SigninComponent {

  public  signinForm: FormGroup;
  public  loginErr = false;
  public  sending = false;

  constructor( public  fb: FormBuilder, public auth: AuthService,
  public  cookies: CookiesService , public router: Router) {

    this.signinForm = fb.group({
      'email': [null, Validators.compose([Validators.email, Validators.required])],
      'password': [null, Validators.compose([Validators.pattern(/^(?=.*[a-z])/), Validators.required])]
    });
  }


  submitSigninForm($formData) {
        this.sending = true;
        const that = this;
        this.auth.login($formData)
        .then(response => {
          console.log(response);
        that.sending = false;
        if (response) {
          this.router.navigate(['/']);
          return true;
        } else {
            that.loginErr = true;
        }

        })
        .catch(reject => {
        that.sending = false;
        return false;
        });
    }
}

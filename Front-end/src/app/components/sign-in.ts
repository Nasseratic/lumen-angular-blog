import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookiesService } from '../services/cookies.service';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login-dialog',
  template: `
    <form [formGroup]='signinForm' (ngSubmit)='submitSigninForm(signinForm.value)'>
      <h2 style='text-align: center'>User Login</h2>
      <md-input-container class='col-md-12 row' style="min-width: 100%;">
        <input mdInput type='text' class="col-md-12" [placeholder]="Email" formControlName='email'>
      </md-input-container>
      <md-input-container class='col-md-12 row' style="min-width: 100%;">
        <input mdInput type='password' class="col-md-12" [placeholder]="Password" formControlName='password'>
      </md-input-container>

      <div class='col-md-12 row'>
      <div  *ngIf="loginErr" class="alert alert-danger col-md-12 center-block" role="alert"> Error unknowen email or password.</div>
      </div>

      <div style='text-align:center'>
      <button [disabled]="sending" md-raised-button  type='submit' color="accent" class='center-block' >
        <md-spinner *ngIf='sending' class="center-block"></md-spinner> <span *ngIf='!sending' > User Login </span>
      </button>
      </div>
    </form>
  `,
  providers: [ AuthService , FormBuilder],
  styles: [ 'md-chip {max-width: 100%;}' , 'md-spinner{max-height:36px; display:inline-block;}' ],
})
export class SigninComponent {

  public  signinForm: FormGroup;
  public  loginErr = false;
  public  sending = false;

  constructor( public  fb: FormBuilder, public auth: AuthService,
  public  cookies: CookiesService) {

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

        that.sending = false;
        if (response) {
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

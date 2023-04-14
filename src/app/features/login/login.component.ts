import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit{
  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  })
  showPopUp = false
  constructor(private _router: Router, private loginService: LoginService) {
  }

  ngOnInit() {
  }

  get username() {
    return this.form.get('username') as FormControl
  }

  get password() {
    return this.form.get('password') as FormControl
  }

  SubmitValue() {
    if(this.username.value === 'admin' && this.password.value === 'admin') {
      alert('successfully register')
      this.loginService.isUserLoggedIn = true
      this._router.navigateByUrl('/dashboard').then()
      this.form.reset()
    }else{
      this.showPopUp = true
    }

  }

}

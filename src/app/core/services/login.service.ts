import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { LoginInformation } from '../interfaces/login-information.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public isUserLoggedIn = false
  public userinfo: BehaviorSubject<LoginInformation> = new BehaviorSubject({username: '', password: ''});


  constructor(private router: Router) {
    const loginInfo = localStorage.getItem('loginInfo');
    if (loginInfo) {
      this.setUserInfo(JSON.parse(loginInfo));
    }
  }

  public setUserInfo(val: LoginInformation) {
    this.userinfo.next(val)
    this.isUserLoggedIn = true

    localStorage.setItem('loginInfo', JSON.stringify(val));
  }

  public clearUserInfo() {
    this.userinfo.next({username: '', password: ''});
    this.isUserLoggedIn = false;

    localStorage.clear()
    this.router.navigateByUrl('/login').then()
  }
}

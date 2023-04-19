import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginInformation } from '../interfaces/login-information.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public isUserLoggedIn = false


  constructor(private router: Router) {
    const loginInfo = localStorage.getItem('loginInfo');
    if (loginInfo) {
     this.isUserLoggedIn = true
    }
  }

  public setUserInfo(val: LoginInformation) {
    this.isUserLoggedIn = true
    localStorage.setItem('loginInfo', JSON.stringify(val));
  }

  public clearUserInfo() {
    this.isUserLoggedIn = false;

    localStorage.clear()
    this.router.navigateByUrl('/login').then()
  }
}

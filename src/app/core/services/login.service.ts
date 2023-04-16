import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserInformation } from '../interfaces/user-information.model';
import { LoginInformation } from '../interfaces/login-information.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public isUserLoggedIn = false
  public userinfo: BehaviorSubject<LoginInformation> = new BehaviorSubject({username: '', password: ''})


  constructor() { }

  public setUserInfo(val: LoginInformation) {
    this.userinfo.next(val)
    this.isUserLoggedIn = true
  }
}

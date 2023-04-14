import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public isUserLoggedIn = false


  constructor() { }
}

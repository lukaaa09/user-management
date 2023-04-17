import { Component } from '@angular/core';
import { LoginService } from './core/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'user-management';
  constructor(private loginService: LoginService) {
  }

  get isUserLoggedIn() {
    return this.loginService.isUserLoggedIn
  }
}

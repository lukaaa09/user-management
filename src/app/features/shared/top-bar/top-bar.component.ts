import { Component } from '@angular/core';
import { LoginService } from '../../../core/services/login.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  constructor(private loginService: LoginService) {
  }

  logOut() {
    this.loginService.clearUserInfo()
  }

}

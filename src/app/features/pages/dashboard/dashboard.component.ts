import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { UserInformation } from '../../../core/interfaces/user-information.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit{
  userDetails: BehaviorSubject<UserInformation[]> = new BehaviorSubject<UserInformation[]>([])
  isContextVisible: boolean = false
  contextPositionX: number = 0
  contextPositionY: number = 0
  selectedUser?: UserInformation
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(res => {
      this.userDetails.next(res)
      console.log(this.userDetails)
    })
  }

  showContextMenu(event: MouseEvent, user: UserInformation): void {
    this.contextPositionX = event.clientX
    this.contextPositionY = event.clientY
    this.isContextVisible = !this.isContextVisible
    this.selectedUser = user
  }

  deleteUser(user: UserInformation): void {
    const index = this.userDetails.value.indexOf(user)
    const cutUser = confirm('Are You Sure')
    if(index > -1 && cutUser) {
      this.userDetails.value.splice(index, 1)
      this.isContextVisible = false
    }
  }
}

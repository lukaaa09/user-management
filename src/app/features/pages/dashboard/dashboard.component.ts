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
    this.isContextVisible = true
    this.selectedUser = user
  }

  outsideClick() {
   this.isContextVisible = false
  }

  deleteUser(id: number ):void {
    let cut = confirm('Are you sure?')
    if(cut) {
      this.userDetails.next(this.userDetails.value.filter(user => user.id !== id));
      this.isContextVisible = false
    }
  }
}

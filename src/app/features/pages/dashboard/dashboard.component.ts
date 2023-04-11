import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GetusersService } from '../../../core/services/getusers.service';
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
  constructor(private usersService: GetusersService) {
  }

  ngOnInit() {
    this.usersService.getUsers().subscribe(res => {
      this.userDetails.next(res)
      console.log(this.userDetails)
    })
  }
}

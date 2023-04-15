import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { UserInformation } from '../../../core/interfaces/user-information.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
  getUserId: any
  users: BehaviorSubject<UserInformation[]> = new BehaviorSubject<UserInformation[]>([])
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
  this.getUserId =  this.activatedRoute.snapshot.paramMap.get('id')
    this.getUser()
  }

  getUser() {
    this.userService.getSingleUser(this.getUserId).subscribe(res => {
      this.users.next(res)
      console.log(this.users)
    })
  }

}

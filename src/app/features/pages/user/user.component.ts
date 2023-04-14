import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
  getUserId: any
  user: any
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
  this.getUserId =  this.activatedRoute.snapshot.paramMap.get('id')

  }

  getUser() {
    this.userService.getSingleUser(1).subscribe(res => {
      this.user = res
    })
  }

}

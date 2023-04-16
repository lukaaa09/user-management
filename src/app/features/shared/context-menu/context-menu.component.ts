import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserInformation } from '../../../core/interfaces/user-information.model';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss']
})
export class ContextMenuComponent implements OnInit{
  @Input() contextPositionX: number = 0
  @Input() contextPositionY: number = 0
  isContextVisible: boolean = false
  @Input() user?: UserInformation
  @Output() removeUser: EventEmitter<number> = new EventEmitter<number>()

  constructor( private router: Router) {
  }

  ngOnInit() {

  }
  deleteUser(id?: number): void {
    this.removeUser.emit(id)
  }

  navigateToSingleUserPage(id?:number) {
    this.router.navigateByUrl(`/user/${id}`).then()
  }
}

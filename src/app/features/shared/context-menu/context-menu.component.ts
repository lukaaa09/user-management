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
  @Output() removeUser: EventEmitter<UserInformation> = new EventEmitter<UserInformation>()

  constructor(private elementRef: ElementRef, private router: Router, private userService: UserService) {
  }
  @HostListener('document:click', ['$event.target'])

  ngOnInit() {

  }

  showContextBox(targetElement: any) {
    const clickInside = this.elementRef.nativeElement.contains(targetElement)
    if(!clickInside) {
      this.isContextVisible = true
    }
  }

  deleteUser(user?: UserInformation): void {
    this.removeUser.emit(user)
  }

  navigateToSingleUserPage(id?:number) {
    this.router.navigateByUrl(`/user/${id}`).then()
  }
}

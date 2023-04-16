import {NgModule} from '@angular/core';
import {UserComponent} from './user.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports:[
    CommonModule,
    RouterModule.forChild([{path: '', component: UserComponent}])
  ],
  exports: [UserComponent]
})
export class UserModule{}

import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContextMenuComponent } from '../../shared/context-menu/context-menu.component';
import { ClickedOutsideDirective } from '../../../core/directives/clicked-outside.directive'



@NgModule({
  declarations: [
    DashboardComponent,
    ContextMenuComponent,
    ClickedOutsideDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: DashboardComponent}])
  ],
  exports: [DashboardComponent]
})
export class  DashboardModule{}

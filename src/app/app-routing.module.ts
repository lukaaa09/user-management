import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { LoginGuard } from './core/guards/login.guard';
import { DashboardComponent } from './features/pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'

  },
  {
    path: 'login',
    component: LoginComponent,

  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/pages/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'user/:id',
    loadChildren: () => import('./features/pages/user/user.module').then(m => m.UserModule),
    canActivate: [LoginGuard]
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

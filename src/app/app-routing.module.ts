import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { LogoutGuard } from './core/guards/logout.guard';
import { LoginGuard } from './core/guards/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'

  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard]

  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/pages/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [LogoutGuard]
  },
  {
    path: 'user/:id',
    loadChildren: () => import('./features/pages/user/user.module').then(m => m.UserModule),
    canActivate: [LogoutGuard]
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

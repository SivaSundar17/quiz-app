import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { AdminProfileComponent } from './pages/admin/admin-profile/admin-profile.component';
import { AdminSidebarComponent } from './pages/admin/admin-sidebar/admin-sidebar.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';


const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: LoginComponent },
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  {
    path: 'admin', component: AdminDashboardComponent,
    children: [
      {
        path: 'profile',
        component: AdminProfileComponent
      }
    ]
  },
  {
    path: 'user', component: UserDashboardComponent,
    children: [
      {
        path: 'profile',
        component: UserProfileComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

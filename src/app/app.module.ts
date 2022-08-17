import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './pages/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmPasswordValidatorDirective } from './shared/confirm-password-validator.directive';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminSidebarComponent } from './pages/admin/admin-sidebar/admin-sidebar.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { UserSidebarComponent } from './pages/user/user-sidebar/user-sidebar.component';
import { AdminProfileComponent } from './pages/admin/admin-profile/admin-profile.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ConfirmPasswordValidatorDirective,
    AdminDashboardComponent,
    UserDashboardComponent,
    AdminSidebarComponent,
    UserSidebarComponent,
    AdminProfileComponent,
    UserProfileComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxNavbarModule,
    MatFormFieldModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

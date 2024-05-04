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
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { UserSidebarComponent } from './pages/user/user-sidebar/user-sidebar.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { PaymentGateComponent } from './pages/payment-gate/payment-gate.component';
import { MaterialpageComponent } from './pages/admin/materialpage/materialpage.component';
import { MaterialUploadComponent } from './pages/admin/material-upload/material-upload.component';
import { MaterialUpdateComponent } from './pages/admin/material-update/material-update.component';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSelectModule } from "@angular/material/select";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { AdminProfileComponent } from './pages/admin/admin-profile/admin-profile.component';
import { UpdateprofileComponent } from './pages/admin/updateprofile/updateprofile.component';
import { ChangePasswordComponent } from './pages/admin/change-password/change-password.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { UpdateQuizzComponent } from './pages/admin/update-quizz/update-quizz.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { UpdateUserProfileComponent } from './pages/user/update-user-profile/update-user-profile.component';
import { ChangeUserPasswordComponent } from './pages/user/change-user-password/change-user-password.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartComponent } from './pages/start/start.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AddQuizzComponent } from './pages/admin/add-quizz/add-quizz.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { UpdateQuestionComponent } from './pages/admin/update-question/update-question.component';
import { QuizMaterialsComponent } from './pages/admin/quiz-materials/quiz-materials.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ViewMaterialsComponent } from './pages/user/view-materials/view-materials.component';
import { ViewRevenueComponent } from './pages/admin/view-revenue/view-revenue.component';
import { MatTableModule } from '@angular/material/table';
import { TestHistoryComponent } from './pages/user/test-history/test-history.component';
import { ViewUsersComponent } from './pages/admin/view-users/view-users.component';
import { UserScoresComponent } from './pages/admin/user-scores/user-scores.component'  
import {NgxPaginationModule} from 'ngx-pagination';
import { UserHomeComponent } from './pages/user/user-home/user-home.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
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
    UserProfileComponent,
    PaymentGateComponent,
    MaterialpageComponent,
    MaterialUploadComponent,
    MaterialUpdateComponent,
    AdminProfileComponent,
    UpdateprofileComponent,
    ChangePasswordComponent,
    ViewQuizzesComponent,
    UpdateQuizzComponent,
    ViewQuizQuestionsComponent,
    UpdateUserProfileComponent,
    ChangeUserPasswordComponent,
    LoadQuizComponent,
    InstructionsComponent,
    StartComponent,
    AddQuizzComponent,
    AddQuestionComponent,
    UpdateQuestionComponent,
    QuizMaterialsComponent,
    ViewMaterialsComponent,
    ViewRevenueComponent,
    TestHistoryComponent,
    ViewUsersComponent,
    UserScoresComponent,
    UserHomeComponent,
    AdminHomeComponent
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
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    Ng2SearchPipeModule,
    MatTableModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

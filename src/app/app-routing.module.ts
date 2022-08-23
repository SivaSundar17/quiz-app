import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { AdminProfileComponent } from './pages/admin/admin-profile/admin-profile.component';
import { AdminSidebarComponent } from './pages/admin/admin-sidebar/admin-sidebar.component';
import { ChangePasswordComponent } from './pages/admin/change-password/change-password.component';
import { MaterialUpdateComponent } from './pages/admin/material-update/material-update.component';
import { MaterialUploadComponent } from './pages/admin/material-upload/material-upload.component';
import { MaterialpageComponent } from './pages/admin/materialpage/materialpage.component';
import { UpdateQuizzComponent } from './pages/admin/update-quizz/update-quizz.component';
import { UpdateprofileComponent } from './pages/admin/updateprofile/updateprofile.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { LoginComponent } from './pages/login/login.component';
import { PaymentGateComponent } from './pages/payment-gate/payment-gate.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ChangeUserPasswordComponent } from './pages/user/change-user-password/change-user-password.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { StartComponent } from './pages/start/start.component';
import { UpdateUserProfileComponent } from './pages/user/update-user-profile/update-user-profile.component';
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
        path: 'profile/:id',
        component: AdminProfileComponent
      },
      {
        path: 'profileUpdate/:id',
        component: UpdateprofileComponent
      },
      {
        path: 'materials',
        component: MaterialpageComponent
      },
      {
        path: 'materialUpload',
        component: MaterialUploadComponent
      },
      {
        path: 'materialUpdate/:id',
        component: MaterialUpdateComponent
      },
      {
        path: 'changePassword/:id',
        component: ChangePasswordComponent
      },
      {
        path: 'viewQuizzes',
        component: ViewQuizzesComponent
      },
      {
        path: 'updateQuizz/:id',
        component: UpdateQuizzComponent
      },
      {
        path: 'viewQuestions/:id/:title',
        component: ViewQuizQuestionsComponent
      }

    ]
  },
  {
    path: 'user', component: UserDashboardComponent,
    children: [
      {
        path: 'profile/:id',
        component: UserProfileComponent
      },
      {
        path: 'profileUpdate/:id',
        component: UpdateUserProfileComponent
      },
      {
        path: 'changePassword/:id',
        component: ChangeUserPasswordComponent
      },
      {
        path: 'viewQuizzes',
        component: LoadQuizComponent
      },
      {
        path: 'instructions/:id',
        component:InstructionsComponent
      }
    ]
  },

  { path: 'checkout', component: PaymentGateComponent },
  {
    path: 'start/:id',
    component:StartComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

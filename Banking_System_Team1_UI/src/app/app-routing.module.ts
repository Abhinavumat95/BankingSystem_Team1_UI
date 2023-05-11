import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StaffCornerComponent } from './staff-corner/staff-corner.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { SuperAdminLoginComponent } from './super-admin-login/super-admin-login.component';
import { SuperAdminRegisterComponent } from './super-admin-register/super-admin-register.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { SecurityQuestionMismatchComponent } from './security-question-mismatch/security-question-mismatch.component';
import { CreateStaffComponent } from './create-staff/create-staff.component';
import { StaffViewComponent } from './staff-view/staff-view.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { AdminAuthGaurdService } from './admin-auth-gaurd.service';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'staffcorner', component: StaffCornerComponent},
  {path: 'adminlogin', component: SuperAdminLoginComponent},
  {path: 'adminregister', component: SuperAdminRegisterComponent},
  {path: 'customerprofile', component: CustomerProfileComponent},
  {path: 'forgetpassword', component: ForgetPasswordComponent},
  {path: 'updatepassword', component: UpdatePasswordComponent},
  {path: 'customerregister', component: CustomerRegistrationComponent},
  {path: 'security', component: SecurityQuestionMismatchComponent},
  {path: 'createstaff', component: CreateStaffComponent},
  {path: 'viewstaff', component: StaffViewComponent},
  {path: 'adminview', component: AdminViewComponent, canActivate : [AdminAuthGaurdService]},
  {path: 'staffdashboard', component: StaffDashboardComponent},
  
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

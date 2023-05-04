import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { SecurityQuestionMismatchComponent } from './security-question-mismatch/security-question-mismatch.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AddBeneficiaryComponent } from './add-beneficiary/add-beneficiary.component';
import { RemoveBeneficiaryComponent } from './remove-beneficiary/remove-beneficiary.component';
import { TransferMoneyComponent } from './transfer-money/transfer-money.component';
import { ViewStatementComponent } from './view-statement/view-statement.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { CreateStaffComponent } from './create-staff/create-staff.component';
import { ViewStaffComponent } from './view-staff/view-staff.component';
import { EnableOrDisableStaffComponent } from './enable-or-disable-staff/enable-or-disable-staff.component';
import { StaffCornerComponent } from './staff-corner/staff-corner.component';
import { StaffViewComponent } from './staff-view/staff-view.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { ApproveBeneficiaryComponent } from './approve-beneficiary/approve-beneficiary.component';
import { ApproveAccountComponent } from './approve-account/approve-account.component';
import { EnableOrBlockCustomerComponent } from './enable-or-block-customer/enable-or-block-customer.component';
import { TransferComponent } from './transfer/transfer.component';
import { ByAccountNumberComponent } from './by-account-number/by-account-number.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    ForgetPasswordComponent,
    UpdatePasswordComponent,
    SecurityQuestionMismatchComponent,
    CustomerDashboardComponent,
    CustomerProfileComponent,
    CreateAccountComponent,
    AddBeneficiaryComponent,
    RemoveBeneficiaryComponent,
    TransferMoneyComponent,
    ViewStatementComponent,
    UpdateProfileComponent,
    SuperAdminComponent,
    AdminViewComponent,
    CreateStaffComponent,
    ViewStaffComponent,
    EnableOrDisableStaffComponent,
    StaffCornerComponent,
    StaffViewComponent,
    StaffDashboardComponent,
    ApproveBeneficiaryComponent,
    ApproveAccountComponent,
    EnableOrBlockCustomerComponent,
    TransferComponent,
    ByAccountNumberComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

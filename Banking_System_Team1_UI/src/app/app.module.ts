import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiSwitchModule } from 'ngx-ui-switch';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { SecurityQuestionMismatchComponent } from './security-question-mismatch/security-question-mismatch.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AddBeneficiaryComponent } from './add-beneficiary/add-beneficiary.component';
import { RemoveBeneficiaryComponent } from './remove-beneficiary/remove-beneficiary.component';
import { TransferMoneyComponent } from './transfer-money/transfer-money.component';
import { ViewStatementComponent } from './view-statement/view-statement.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { SuperAdminLoginComponent } from './super-admin-login/super-admin-login.component';
import { SuperAdminRegisterComponent } from './super-admin-register/super-admin-register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminHeaderComponent } from './admin-header/admin-header.component';

import { StaffLoginComponent } from './staff-login/staff-login.component';
import { StaffHeaderComponent } from './staff-header/staff-header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerRegistrationComponent,
    ForgetPasswordComponent,
    UpdatePasswordComponent,
    SecurityQuestionMismatchComponent,
    CustomerProfileComponent,
    CreateAccountComponent,
    AddBeneficiaryComponent,
    RemoveBeneficiaryComponent,
    TransferMoneyComponent,
    ViewStatementComponent,
    UpdateProfileComponent,
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
    FooterComponent,
    SuperAdminLoginComponent,
    SuperAdminRegisterComponent,
    AdminHeaderComponent,
    StaffLoginComponent,
    StaffHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    UiSwitchModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

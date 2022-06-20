import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustcreditmemoComponent } from './custcreditmemo/custcreditmemo.component';
import { CustdashboardComponent } from './custdashboard/custdashboard.component';
import { CustdeliveryComponent } from './custdelivery/custdelivery.component';
import { CustfinancesheetComponent } from './custfinancesheet/custfinancesheet.component';
import { CustinquiryComponent } from './custinquiry/custinquiry.component';
import { CustinvoiceComponent } from './custinvoice/custinvoice.component';
import { CustpaymentComponent } from './custpayment/custpayment.component';
import { CustprofileComponent } from './custprofile/custprofile.component';
import { CustsalesorderComponent } from './custsalesorder/custsalesorder.component';
import { DummytableComponent } from './dummytable/dummytable.component';
import { HomeComponent } from './home/home.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'custdashboard', component:CustdashboardComponent},
  {path:'custsalesorder',component:CustsalesorderComponent},
  {path:'custdelivery', component:CustdeliveryComponent},
  {path:'custpayment', component:CustpaymentComponent},
  {path:'custcreditmemo', component:CustcreditmemoComponent},
  {path:'custfinancesheet', component:CustfinancesheetComponent},
  {path:'dummytable', component:DummytableComponent},
  {path:'custprofile', component:CustprofileComponent},
  {path:'custinquiry', component:CustinquiryComponent},
  {path:'custinvoice', component:CustinvoiceComponent},
  {path:'invoice', component:InvoiceComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustcreditmemoComponent } from './custcreditmemo/custcreditmemo.component';
import { CustdashboardComponent } from './custdashboard/custdashboard.component';
import { CustdeliveryComponent } from './custdelivery/custdelivery.component';
import { CustfinancesheetComponent } from './custfinancesheet/custfinancesheet.component';
import { CustinquiryComponent } from './custinquiry/custinquiry.component';
import { CustinvoiceComponent } from './custinvoice/custinvoice.component';
import { CustpaybillComponent } from './custpaybill/custpaybill.component';
import { CustpaymentComponent } from './custpayment/custpayment.component';
import { CustprofileComponent } from './custprofile/custprofile.component';
import { CustsalesorderComponent } from './custsalesorder/custsalesorder.component';
import { DummytableComponent } from './dummytable/dummytable.component';
import { EmpdashboardComponent } from './empdashboard/empdashboard.component';
import { EmpleaveComponent } from './empleave/empleave.component';
import { EmploginComponent } from './emplogin/emplogin.component';
import { EmppayslipComponent } from './emppayslip/emppayslip.component';
import { EmpprofileComponent } from './empprofile/empprofile.component';
import { HomeComponent } from './home/home.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { LoginComponent } from './login/login.component';
import { VendcredebComponent } from './vendcredeb/vendcredeb.component';
import { VenddashboardComponent } from './venddashboard/venddashboard.component';
import { VendfinancesheetComponent } from './vendfinancesheet/vendfinancesheet.component';
import { VendgoodsComponent } from './vendgoods/vendgoods.component';
import { VendinvdetComponent } from './vendinvdet/vendinvdet.component';
import { VendinvoiceComponent } from './vendinvoice/vendinvoice.component';
import { VendloginComponent } from './vendlogin/vendlogin.component';
import { VendpaymentComponent } from './vendpayment/vendpayment.component';
import { VendprofileComponent } from './vendprofile/vendprofile.component';
import { VendpurchaseComponent } from './vendpurchase/vendpurchase.component';
import { VendrfqComponent } from './vendrfq/vendrfq.component';



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
  {path:'custpaybill', component:CustpaybillComponent},
  {path:'vendpurchase', component:VendpurchaseComponent},
  {path:'vendlogin', component:VendloginComponent},
  {path:'vendgoods', component:VendgoodsComponent},
  {path:'vendpayment', component:VendpaymentComponent},
  {path:'vendcredeb', component:VendcredebComponent},
  {path:'vendprofile', component:VendprofileComponent},
  {path:'venddashboard', component:VenddashboardComponent},
  {path:'vendfinancesheet', component:VendfinancesheetComponent},
  {path:'vendrfq', component:VendrfqComponent},
  {path:'vendinvoice', component:VendinvoiceComponent},
  {path:'vendinvdet', component:VendinvdetComponent},
  {path:'emplogin', component:EmploginComponent},
  {path:'empdashboard', component:EmpdashboardComponent},
  {path:'empprofile', component:EmpprofileComponent},
  {path:'empleave', component:EmpleaveComponent},
  {path:'emppayslip', component:EmppayslipComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

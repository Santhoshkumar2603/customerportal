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
import { AuthGuard } from './shared/auth.guard';
import { EmpGuard } from './shared/emp.guard';
import { VendorGuard } from './shared/vendor.guard';
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
  {path:'custdashboard', component:CustdashboardComponent, canActivate:[AuthGuard]},
  {path:'custsalesorder',component:CustsalesorderComponent, canActivate:[AuthGuard]},
  {path:'custdelivery', component:CustdeliveryComponent, canActivate:[AuthGuard]},
  {path:'custpayment', component:CustpaymentComponent, canActivate:[AuthGuard]},
  {path:'custcreditmemo', component:CustcreditmemoComponent, canActivate:[AuthGuard]},
  {path:'custfinancesheet', component:CustfinancesheetComponent, canActivate:[AuthGuard]},
  {path:'dummytable', component:DummytableComponent},
  {path:'custprofile', component:CustprofileComponent, canActivate:[AuthGuard]},
  {path:'custinquiry', component:CustinquiryComponent, canActivate:[AuthGuard]},
  {path:'custinvoice', component:CustinvoiceComponent, canActivate:[AuthGuard]},
  {path:'invoice', component:InvoiceComponent, canActivate:[AuthGuard]},
  {path:'custpaybill', component:CustpaybillComponent, canActivate:[AuthGuard]},
  {path:'vendpurchase', component:VendpurchaseComponent, canActivate:[VendorGuard]},
  {path:'vendlogin', component:VendloginComponent},
  {path:'vendgoods', component:VendgoodsComponent, canActivate:[VendorGuard]},
  {path:'vendpayment', component:VendpaymentComponent, canActivate:[VendorGuard]},
  {path:'vendcredeb', component:VendcredebComponent, canActivate:[VendorGuard]},
  {path:'vendprofile', component:VendprofileComponent, canActivate:[VendorGuard]},
  {path:'venddashboard', component:VenddashboardComponent, canActivate:[VendorGuard]},
  {path:'vendfinancesheet', component:VendfinancesheetComponent, canActivate:[VendorGuard]},
  {path:'vendrfq', component:VendrfqComponent, canActivate:[VendorGuard]},
  {path:'vendinvoice', component:VendinvoiceComponent, canActivate:[VendorGuard]},
  {path:'vendinvdet', component:VendinvdetComponent, canActivate:[VendorGuard]},
  {path:'emplogin', component:EmploginComponent},
  {path:'empdashboard', component:EmpdashboardComponent, canActivate:[EmpGuard]},
  {path:'empprofile', component:EmpprofileComponent, canActivate:[EmpGuard]},
  {path:'empleave', component:EmpleaveComponent, canActivate:[EmpGuard]},
  {path:'emppayslip', component:EmppayslipComponent, canActivate:[EmpGuard]},
  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

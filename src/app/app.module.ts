import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CustdashboardComponent } from './custdashboard/custdashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustsalesorderComponent } from './custsalesorder/custsalesorder.component';
import { CustdeliveryComponent } from './custdelivery/custdelivery.component';
import { CustpaymentComponent } from './custpayment/custpayment.component';
import { CustcreditmemoComponent } from './custcreditmemo/custcreditmemo.component';
import { CustfinancesheetComponent } from './custfinancesheet/custfinancesheet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DummytableComponent } from './dummytable/dummytable.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { CustprofileComponent } from './custprofile/custprofile.component';
import { CustinquiryComponent } from './custinquiry/custinquiry.component';
import { CustinvoiceComponent } from './custinvoice/custinvoice.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { CustpaybillComponent } from './custpaybill/custpaybill.component';
import { VendpurchaseComponent } from './vendpurchase/vendpurchase.component';
import { VendloginComponent } from './vendlogin/vendlogin.component';
import { VendgoodsComponent } from './vendgoods/vendgoods.component';
import { VendpaymentComponent } from './vendpayment/vendpayment.component';
import { VendcredebComponent } from './vendcredeb/vendcredeb.component';
import { VendprofileComponent } from './vendprofile/vendprofile.component';
import { VenddashboardComponent } from './venddashboard/venddashboard.component';
import { VendfinancesheetComponent } from './vendfinancesheet/vendfinancesheet.component';
import { VendrfqComponent } from './vendrfq/vendrfq.component';
import { VendinvoiceComponent } from './vendinvoice/vendinvoice.component';
import { VendinvdetComponent } from './vendinvdet/vendinvdet.component';








@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CustdashboardComponent,
    CustsalesorderComponent,
    CustdeliveryComponent,
    CustpaymentComponent,
    CustcreditmemoComponent,
    CustfinancesheetComponent,
    DummytableComponent,
    CustprofileComponent,
    CustinquiryComponent,
    CustinvoiceComponent,
    InvoiceComponent,
    CustpaybillComponent,
    VendpurchaseComponent,
    VendloginComponent,
    VendgoodsComponent,
    VendpaymentComponent,
    VendcredebComponent,
    VendprofileComponent,
    VenddashboardComponent,
    VendfinancesheetComponent,
    VendrfqComponent,
    VendinvoiceComponent,
    VendinvdetComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    FormsModule,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { 
  
}

import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { CustomerIdService } from '../customer-id.service';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { TablevalueService } from '../tablevalue.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  custname: any;
  salesdocnum: any;
  accdocnum: any;
  acctyp: any;
  fiscalyear: any;
  cord: any;
  lineitemnum: any;
  currencytype: any;
  balsedate: any;
  lastduneddate: any;
  loccuramount: any;
  doccuramount: any;
  generalledgeamount: any;
  invDet:any;
  custid:any;

  constructor(private el: ElementRef, private renderer:Renderer2, private customernumber : CustomerIdService,public router:Router, private http:HttpClient, private table:TablevalueService) { }

  ngOnInit(): void {

    this.invDet=this.table.getmessage();
    console.log(this.invDet)
    this.custid=this.invDet.KUNNR;
      // this.message = this.customernumber.getmessage()
    
   this.custname=sessionStorage.getItem('custname');
   console.log(this.custname)
  this.salesdocnum=this.invDet.VBEL2;
  this.accdocnum=this.invDet.BELNR;
  this.acctyp=this.invDet.KOART;
  this.fiscalyear=this.invDet.GJAHR;
  this.cord=this.invDet.SHKZG;
  this.lineitemnum=this.invDet.BUZEI;
  this.currencytype=this.invDet.PSWSL;
  this.balsedate=this.invDet.ZFBDT;
  this.lastduneddate=this.invDet.MADAT;
  this.loccuramount=this.invDet.DMBTR;
  this.doccuramount=this.invDet.WRBTR;
  this.generalledgeamount=this.invDet.PSWBT;

  if(this.invDet.SHKZG === 'S')
  {
    this.cord="Credit"
  }
  else if(this.invDet.SHKZG === 'H'){
    this.cord="Debit"
  }

  if(this.invDet.KOART === 'A')
  {
    this.acctyp="Assets"
  }
  else if(this.invDet.KOART === 'D'){
    this.acctyp="Customers"
  }
  else if(this.invDet.KOART === 'K'){
    this.acctyp="Vendors"
  }
  else if(this.invDet.KOART === 'M'){
    this.acctyp="Material"
  }
  else if(this.invDet.KOART === 'S'){
    this.acctyp="G/L accounts"
  }

  }

  ngAfterViewInit(){

    this.renderer.setStyle(this.el.nativeElement.ownerDocument.body,'backgroundColor', '#EEE');
    
    }

}

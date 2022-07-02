import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CustomerIdService } from '../customer-id.service';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { TablevalueService} from '../tablevalue.service';
import jspdf from 'jspdf';  
import html2canvas from 'html2canvas';  


// declare var require: any;

// import * as pdfMake from "pdfmake/build/pdfmake";
// import * as pdfFonts from "pdfmake/build/vfs_fonts";
// const htmlToPdfmake = require("html-to-pdfmake");
// (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

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
  total:number=0;
  livedate:any;
  constructor(private el: ElementRef, private renderer:Renderer2, private customernumber : CustomerIdService,public router:Router, private http:HttpClient, private table:TablevalueService) { }

  ngOnInit(): any {

    this.invDet=this.table.getmessage();
    console.log(this.invDet)
    this.custid=this.invDet.KUNNR;
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
  this.total=parseInt(this.loccuramount)+parseInt(this.doccuramount);

  let curr_date = new Date();
  this.livedate=curr_date.toLocaleDateString();

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

    this.renderer.setStyle(this.el.nativeElement.ownerDocument.body,'backgroundColor', '#fff0f0');
    // this.pdf();

    }
  public pdf(){
    var data:any = document.getElementById('contentToConvert');  //Id of the table
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      let imgWidth = 208;   
      let pageHeight = 295;    
      let imgHeight = canvas.height * imgWidth / canvas.width;  
      let heightLeft = imgHeight;  

      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      let position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('Invoice_Slip.pdf'); // Generated PDF   
    });  
  }

}

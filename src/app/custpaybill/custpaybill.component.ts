import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { CustomerIdService } from '../customer-id.service';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import jspdf from 'jspdf';  
import html2canvas from 'html2canvas';  


// import { TablevalueService } from '../tablevalue.service';
import { CustbillService } from '../custbill.service';

@Component({
  selector: 'app-custpaybill',
  templateUrl: './custpaybill.component.html',
  styleUrls: ['./custpaybill.component.css']
})
export class CustpaybillComponent implements OnInit {

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
  generalledgeamount: any=0;
  invDet:any;
  custid:any;

  baseUrl : string='http://localhost:3000/custinvoice1';
  Data: any;
  doctyp:any;
  salesdet:any;  
  message:any;
 custnumber:any;
 credeb:any=[];
 aging:any;
 livedate:any;

  constructor(private el: ElementRef, private renderer:Renderer2, private customernumber : CustomerIdService,public router:Router, private http:HttpClient, private table: CustbillService) { }

  ngOnInit():any{
    this.message= this.table.getMessage()
    // this.customernumber=(this.message[1]);
    console.log(this.message[1]+"san");
    
    
    return this.http.post(this.baseUrl,{
     customerno:this.message[0],
     salesno:this.message[1]
       }).subscribe(
         response =>{
           console.log(response)
           this.Data = JSON.parse(JSON.stringify(response));
           this.salesdet=(this.Data.INV_DET.item);
          console.log(this.salesdet.SHKZG);

          for(let i=0;i<this.salesdet.length;i++)
          {
          
            if(this.salesdet[i].SHKZG === "S")
            {
              this.salesdet[i].SHKZG="Credit";
              this.accdocnum=this.salesdet[i].BELNR;
              this.acctyp=this.salesdet[i].KOART;
              if(this.salesdet[i].KOART === 'A')
              {
                this.acctyp="Assets"
              }
              else if(this.salesdet[i].KOART === 'D'){
                this.acctyp="Customers"
              }
              else if(this.salesdet[i].KOART === 'K'){
                this.acctyp="Vendors"
              }
              else if(this.salesdet[i].KOART === 'M'){
                this.acctyp="Material"
              }
              else if(this.salesdet[i].KOART === 'S'){
                this.acctyp="G/L accounts"
              }
            

              // var balance_amount = this.salesdet[i].WRBTR;
              var due_date = new Date(this.salesdet[i].MADAT);
              let curr_date = new Date();
              this.livedate=curr_date.toLocaleDateString();
              var time = curr_date.getTime() - due_date.getTime();
              var day = time / (1000 * 3600 * 24);
              if(Math.floor(day)>0){
                this.aging = Math.floor(day);
              }
            } 
            else
            {
              this.salesdet[i].SHKZG="Debit";
            }        
            this.lineitemnum=this.salesdet[i].BUZEI;
            this.generalledgeamount+=parseFloat(this.salesdet[i].WRBTR);
            this.loccuramount=this.salesdet[i].DMBTR;
            this.doccuramount=this.salesdet[i].WRBTR;
            this.currencytype=this.salesdet[i].PSWSL;
         }
         this.generalledgeamount=this.generalledgeamount.toFixed(2);
         

         }
       )
   }
ngAfterViewInit(){

  this.renderer.setStyle(this.el.nativeElement.ownerDocument.body,'backgroundColor', '#fff0f0');
  
  }
  public pdf()  
  {  
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
      pdf.save('Payment_Bill.pdf'); // Generated PDF   
    });  
  }  

}


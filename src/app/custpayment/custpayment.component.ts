import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CustomerIdService } from '../customer-id.service';
// import { TablevalueService } from '../tablevalue.service';
import { CustbillService } from '../custbill.service';
declare var $:any;

@Component({
  selector: 'app-custpayment',
  templateUrl: './custpayment.component.html',
  styleUrls: ['./custpayment.component.css']
})
export class CustpaymentComponent implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2, private http: HttpClient, public router: Router, private customernumber: CustomerIdService, private tablevalue: CustbillService) { }

  received: any
  array: any = []
  message: any;
  custnumber: any
  baseUrl: string = 'http://localhost:3000/custinvoice';
  Data: any;
  sales: any = [];
  sts: any = "";
  stsdes: any;
  kunnr: any;
  p :number=1;  
  SD_DOC:any;
 
  livedate:any;
  aging:any=[];
  len:any;


  ngOnInit(): any {
    this.received = this.customernumber.getmessage()
    console.log(this.received);
    return this.http.post(this.baseUrl, {
      customerno: this.received
    }).subscribe(
      response => {
        console.log(response)
        this.Data = JSON.parse(JSON.stringify(response));

        this.message = (this.Data.INV_DET.item);
      
        //  this.tablevalue.setmessage(this.message.KUNNR,this.message.VBEL2);
        //  console.log(this.message.KUNNR); PSWSL

        let k = 0;
        for (let i = 0; i < this.message.length; i++) {
          if (this.message[i].KOART === "S") {
            this.sales[k++] = this.message[i];

          }
          if (this.message[i].SHKZG === 'S') {
            this.sts = "Completed";
            this.stsdes = "Payment Completed"
          }
          if (this.message[i].SHKZG === 'H') {
            this.sts = "Pending"
            this.stsdes = "Payment Date Exceeded"
          }

        }
        let m=0;
        this.len=this.sales.length;
        for(let i=0;i<this.sales.length;i++)
        {
          if(this.sales[i].PSWSL === "EUR"){
          var due_date = new Date(this.sales[i].MADAT);
          let curr_date = new Date();
          this.livedate=curr_date.toLocaleDateString();
          var time = curr_date.getTime() - due_date.getTime();
          var day = time / (1000 * 3600 * 24);
          if(Math.floor(day)>0){
            this.sales[i].PSWSL = Math.floor(day);
          } 
          }
        }
        console.log(this.message.SHKZG);
        


      }
    )
  }

  ngAfterViewInit() {

    this.renderer.setStyle(this.el.nativeElement.ownerDocument.body, 'backgroundColor', '#fff0f0');
    $(document).ready(function () {
      $(".hamburger").click(function () {
          $(".wrapper").toggleClass("collapsed");
      });
  });

  }

  onInvoiceClick(data: any){
    // this.kunnr = this.customernumber.getmessage()
    this.kunnr="12"
    console.log(this.kunnr,data.VBEL2)
    this.tablevalue.setMessage(this.kunnr,data.VBEL2)
    
    this.router.navigateByUrl('/custpaybill');
  }


  search(){
    if(this.SD_DOC == "")
    {
      this.ngOnInit();
    }
    else{
      this.sales = this.sales.filter((res: { SD_DOC: string; }) =>{
        return res.SD_DOC.toLocaleLowerCase().match(this.SD_DOC.toLocaleLowerCase());
      })
    }
  }

key : string='SD_DOC';
reverse:boolean = false;
sort(key: string)
{
  this.key=key;
  this.reverse = !this.reverse;
}
}

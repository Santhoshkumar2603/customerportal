import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { CustomerIdService } from '../customer-id.service';
import { TablevalueService } from '../tablevalue.service';
declare var $:any;

@Component({
  selector: 'app-custinvoice',
  templateUrl: './custinvoice.component.html',
  styleUrls: ['./custinvoice.component.css']
})
export class CustinvoiceComponent implements OnInit {

  received:any
  array:any=[]
  message:any;
  custnumber:any
  baseUrl : string='http://localhost:3000/custinvoice';
  Data: any;
 sales:any=[];
spinner=false
 p :number=1;  
  SD_DOC:any;
  len:any;

  constructor(private el: ElementRef, private renderer:Renderer2, private http:HttpClient,public router:Router, private customernumber:CustomerIdService, private table:TablevalueService) 
  {}

  ngOnInit(): any {
    this.received=  this.customernumber.getmessage()
    console.log(this.received);
    return this.http.post(this.baseUrl,{
      customerno:this.received
        }).subscribe(
          response =>{
            console.log(response)
            this.Data = JSON.parse(JSON.stringify(response));
            
            this.message=(this.Data.INV_DET.item);
            let k = 0;
        for (let i = 0; i < this.message.length; i++) {
          if (this.message[i].KOART === "S") {
            this.sales[k++] = this.message[i];
          }
        }
        this.spinner=true
        this.len=this.sales.length;
            console.log(this.message);

          }
        )
    }
    onInvoiceClick(data:any){
      console.log(data)
      // sessionStorage.setItem('invoicetable',data);
      this.table.setmessage(data);
      this.router.navigateByUrl('/invoice');
    
  
      // window.open(url, '_blank');
     
    }
  ngAfterViewInit(){

    this.renderer.setStyle(this.el.nativeElement.ownerDocument.body,'backgroundColor', '#fff0f0');
    $(document).ready(function () {
      $(".hamburger").click(function () {
          $(".wrapper").toggleClass("collapsed");
      });
  });
    
    }

    search(){
     
    }

  key : string='SD_DOC';
  reverse:boolean = false;
  sort(key: string)
  {
    this.key=key;
    this.reverse = !this.reverse;
  }
  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/home');
  }
    
}

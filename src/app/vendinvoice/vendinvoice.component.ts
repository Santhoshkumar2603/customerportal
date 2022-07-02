import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { CustomerIdService } from '../customer-id.service';
import { TablevalueService } from '../tablevalue.service';
declare var $:any;

@Component({
  selector: 'app-vendinvoice',
  templateUrl: './vendinvoice.component.html',
  styleUrls: ['./vendinvoice.component.css']
})
export class VendinvoiceComponent implements OnInit {

  received:any
  array:any=[]
  message:any;
  custnumber:any
  baseUrl : string='http://localhost:3000/vendorinvlist';
  Data: any;
 sales:any=[];
spinner=false
 p :number=1;  
  SD_DOC:any;
  len:any;
  vendorid:any

  constructor(private el: ElementRef, private renderer:Renderer2, private http:HttpClient,public router:Router, private customernumber:CustomerIdService, private table:TablevalueService) 
  {}

  ngOnInit(): any {
    this.vendorid = localStorage.getItem('vendorid')
    return this.http.post(this.baseUrl, {
      vendorid: this.vendorid
    }).subscribe(
          response =>{
            console.log(response)
            this.Data = JSON.parse(JSON.stringify(response));
            
            this.message=(this.Data.INV_LIST.item);
            let k = 0;
        // for (let i = 0; i < this.message.length; i++) {
        //   if (this.message[i].KOART === "S") {
        //     this.sales[k++] = this.message[i];
        //   }
        // }
        this.spinner=true
        this.len=this.sales.length;
            console.log(this.message);

          }
        )
    }
    onInvoiceClick(data:any){
      console.log(data["BELNR"])
       localStorage.setItem('vendinvoicetable',data["BELNR"]);
       sessionStorage.setItem('vendcurtype',data["WAERS"]);
       sessionStorage.setItem('venddate',data["CPUDT"]);
       sessionStorage.setItem('vendtime',data["CPUTM"]);
       sessionStorage.setItem('vendyear',data["GJAHR"]);
       sessionStorage.setItem('vendtype',data["XRECH"]);

      // this.table.setmessage(data);
      this.router.navigateByUrl('/vendinvdet');
    
  
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

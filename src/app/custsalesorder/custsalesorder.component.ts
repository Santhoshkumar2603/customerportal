import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { CustomerIdService } from '../customer-id.service';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
declare var $:any;



@Component({
  selector: 'app-custsalesorder',
  templateUrl: './custsalesorder.component.html',
  styleUrls: ['./custsalesorder.component.css']
})
export class CustsalesorderComponent implements OnInit {

  constructor(private el: ElementRef, private renderer:Renderer2, private customernumber : CustomerIdService,public router:Router, private http:HttpClient) { }
  baseUrl : string='http://localhost:3000/saleorder';
  Data: any;
  doctyp:any;
  salesdet:any;  
  message:any;
 custnumber:any;
 p :number=1;  
  SD_DOC:any;
len:any;
spinner=false;
  ngOnInit():any{
   this.message= this.customernumber.getmessage()
  // this.customernumber=(this.message[1]);
   console.log(this.message+"san");
   
   
   return this.http.post(this.baseUrl,{
    customerno:this.message
      }).subscribe(
        response =>{
          console.log(response)
          this.Data = JSON.parse(JSON.stringify(response));
          this.salesdet=(this.Data.E_SALESORDER.item);
          for(let i=0;i<this.salesdet.length;i++)
          {
            this.salesdet[i].NET_VALUE=parseInt(this.salesdet[i].NET_VALUE)
            this.salesdet[i].ITM_NUMBER=parseInt(this.salesdet[i].ITM_NUMBER)
            this.salesdet[i].REQ_QTY=parseInt(this.salesdet[i].REQ_QTY)
          }
          this.len=this.salesdet.length;
          console.log(this.salesdet);
          this.spinner=true;
          
       
        }
      )
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
        this.salesdet = this.salesdet.filter((res: { SD_DOC: string; }) =>{
          return res.SD_DOC.toLocaleLowerCase().match(this.SD_DOC.toLocaleLowerCase());
        })
      }
    }

  key : any='hhh';
  reverse:boolean = false;
  sort(key: any)
  {

    this.key=(key);
    console.log(this.key)
    this.reverse = !this.reverse;
  }
  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/home');
  }
}

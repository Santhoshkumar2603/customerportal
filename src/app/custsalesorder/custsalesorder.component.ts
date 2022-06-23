import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { CustomerIdService } from '../customer-id.service';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';



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
          console.log(this.salesdet);
          
          
       
        }
      )
  }

  ngAfterViewInit(){

    this.renderer.setStyle(this.el.nativeElement.ownerDocument.body,'backgroundColor', '#fce6d9');
    
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

  key : string='SD_DOC';
  reverse:boolean = false;
  sort(key: string)
  {
    this.key=key;
    this.reverse = !this.reverse;
  }
}

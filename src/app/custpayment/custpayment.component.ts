import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { CustomerIdService } from '../customer-id.service';

@Component({
  selector: 'app-custpayment',
  templateUrl: './custpayment.component.html',
  styleUrls: ['./custpayment.component.css']
})
export class CustpaymentComponent implements OnInit {

  constructor(private el: ElementRef, private renderer:Renderer2, private http:HttpClient,public router:Router, private customernumber:CustomerIdService) { }

  baseUrl : string='http://localhost:3000/payment';
  Data: any;
  payment:any=[]
  sample:any;
  received:any;
  ngOnInit(): any {
    this.received=this.customernumber.getmessage();
    console.log(this.received);
    return this.http.post(this.baseUrl,{
      customerno:this.received
        }).subscribe(
          response =>{
            console.log(response)
            this.Data = JSON.parse(JSON.stringify(response));
           // console.log(this.Data);
            this.sample=this.Data.IT_DET.item
            console.log(this.sample);
            
            
            
            
          }
        )
  }

  ngAfterViewInit(){

    this.renderer.setStyle(this.el.nativeElement.ownerDocument.body,'backgroundColor', '#fce6d9');
    
    }

}

import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { CustomerIdService } from '../customer-id.service';

@Component({
  selector: 'app-custinquiry',
  templateUrl: './custinquiry.component.html',
  styleUrls: ['./custinquiry.component.css']
})
export class CustinquiryComponent implements OnInit {

  received:any
  array:any=[]
  message:any;
  custnumber:any
  baseUrl : string='http://localhost:3000/custinquiry';
  Data: any;

  constructor(private el: ElementRef, private renderer:Renderer2, private http:HttpClient,public router:Router, private customernumber:CustomerIdService) 
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
            console.log(this.message);

          }
        )
    }
  ngAfterViewInit(){

    this.renderer.setStyle(this.el.nativeElement.ownerDocument.body,'backgroundColor', '#fce6d9');

    
    }

}

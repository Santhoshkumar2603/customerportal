import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { CustomerIdService } from '../customer-id.service';
declare var $: any;

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
  p :number=1;  
  SD_DOC:any;
 len:any;
 spinner=false;
  constructor(private el: ElementRef, private renderer:Renderer2, private http:HttpClient,public router:Router, private customernumber:CustomerIdService) 
  {}

  ngOnInit(): any {
    this.received= localStorage.getItem('userid');
    console.log(this.received);
    return this.http.post(this.baseUrl,{
      customerno:this.received
        }).subscribe(
          response =>{
            console.log(response)
            this.Data = JSON.parse(JSON.stringify(response));
            
            this.message=(this.Data.INQ_DET.item);
            this.len=this.message.length;
            console.log(this.message);
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
        this.message = this.message.filter((res: { SD_DOC: string; }) =>{
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
  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/home');
  }

}

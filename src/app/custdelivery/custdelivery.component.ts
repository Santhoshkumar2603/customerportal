import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { CustomerIdService } from '../customer-id.service';
declare var $:any;

@Component({
  selector: 'app-custdelivery',
  templateUrl: './custdelivery.component.html',
  styleUrls: ['./custdelivery.component.css']
})
export class CustdeliveryComponent implements OnInit {


  received:any
  array:any=[]
  message:any;
  custnumber:any
  baseUrl : string='http://localhost:3000/delivery';
  Data: any;
  spinner=false;

  p :number=1;  
   SD_DOC:any;
   total:any;

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
            
            this.message=(this.Data.IT_DELIVERY.item);
            console.log(this.message);
            for(let i=1;i<this.message.length;i++){
              this.array[i-1]=this.message[i]
              if(this.message[i]["LFDAT_V"] === "0000-00-00")
              {
                this.array[i-1]["LFDAT_V"]="NA";
              }
              if(this.message[i]["LFUHR"] === "00:00:00"){
                this.array[i-1]["LFUHR"]="NA";
              }
            }
            this.total=this.array.length;
            console.log(this.array.VBELN);

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
      // if(this.SD_DOC == "")
      // {
      //   this.ngOnInit();
      // }
      // else{
      //   this.array = this.array.filter((res: { VBELN: string; }) =>{
      //     return res.VBELN.toLocaleLowerCase().match(this.SD_DOC.toLocaleLowerCase());
      //   })
      // }
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
  

  
  

  
  
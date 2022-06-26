import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { CustomerIdService } from '../customer-id.service';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-custprofile',
  templateUrl: './custprofile.component.html',
  styleUrls: ['./custprofile.component.css']
})
export class CustprofileComponent implements OnInit {

  constructor(private el: ElementRef, private renderer:Renderer2, private customernumber : CustomerIdService,public router:Router, private http:HttpClient) { }

  baseUrl : string='http://localhost:3000/custprofile';
  Data: any;
  doctyp:any;  
  message:any;
  custnumber:any;
  p :number=1;  
  SD_DOC:any;

  id:any;
  name:any;
  street:any;
  city:any;
  state:any;
  country:any;
  pscode:any;

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
           this.id=(this.Data.E_CUSDETAILS["KUNNR"]);
           this.name=(this.Data.E_CUSDETAILS["NAME_1"]);
           this.street=(this.Data.E_CUSDETAILS["STREET"]);
           this.city=(this.Data.E_CUSDETAILS["CITY"]);
           this.state=(this.Data.E_CUSDETAILS["STATE"]);
           this.country=(this.Data.E_CUSDETAILS["COUNTRY"]);
           this.pscode=(this.Data.E_CUSDETAILS["PS_CODE"]);

           console.log(this.id);
           
           
        
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

}

import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { CustomerIdService } from '../customer-id.service';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-empprofile',
  templateUrl: './empprofile.component.html',
  styleUrls: ['./empprofile.component.css']
})
export class EmpprofileComponent implements OnInit {

  constructor(private el: ElementRef, private renderer:Renderer2, private customernumber : CustomerIdService,public router:Router, private http:HttpClient) { }

  vendorid:any
name:any
addr:any
city:any
country:any
pcode:any
phno:any
Data:any
k:number=0;

baseUrl : string='http://localhost:3000/eprofile';
  ngOnInit(): any {
   
    this.name=localStorage.getItem('vendname')
    this.vendorid=localStorage.getItem('vendorid')
    console.log(this.vendorid);
    
  return this.http.post(this.baseUrl,{
    empid:this.vendorid
      }).subscribe(
        response =>{
          console.log(response)
          this.Data = JSON.parse(JSON.stringify(response));
        //   this.custid=this.Data.IT_OUTPUT.KUNNR;
         
          this.addr=this. Data.VEND_PROFILE.ADDRESS
        // this.name=this.Data.IT_OUTPUT.NAME1
           this.city=this. Data.VEND_PROFILE.CITY
            this. pcode=this.Data.VEND_PROFILE.PINCODE
            this.country=this. Data.VEND_PROFILE.COUNTRY
           this.phno=this. Data.VEND_PROFILE.TELEPHONE
        }
      )
   
  }

}

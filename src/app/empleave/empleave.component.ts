import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { CustomerIdService } from '../customer-id.service';
declare var $: any;

@Component({
  selector: 'app-empleave',
  templateUrl: './empleave.component.html',
  styleUrls: ['./empleave.component.css']
})
export class EmpleaveComponent implements OnInit {

  received:any
  array:any=[]
  message:any;
  custnumber:any
  baseUrl : string='http://localhost:3000/eleave';
  Data: any;
  p :number=1;  
  SD_DOC:any;
 len:any;
 spinner=false;
 vendorid:any;
 header:any;
 headerarray:any=[];
  credit: any;
  debit: any;
  credit_array: any=[];
  debit_array: any=[];
  SD_DOC1: any;
  lenc:any
  lend:any

  constructor(private el: ElementRef, private renderer:Renderer2, private http:HttpClient,public router:Router, private customernumber:CustomerIdService) 
  {}

  ngOnInit(): any {
    this.vendorid=localStorage.getItem('empid')
    return this.http.post(this.baseUrl,{
     
      vendorid:this.vendorid
        }).subscribe(
          response =>{
            console.log(response)
            this.Data = JSON.parse(JSON.stringify(response));
            this.credit=(this.Data.IT_LEAVE_BALANCE.item);
            this.debit=(this.Data.IT_LEAVE_DETAIL.item);

            for(let i=0;i<this.debit;i++){
              this.debit[i].ABSENCEDAYS=parseInt(this.debit[i].ABSENCEDAYS)
              this.debit[i].ABSENCEHOURS=parseInt(this.debit[i].ABSENCEHOURS)
            }

           
            this.lenc=this.credit.length;
            this.lend=this.debit.length;

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

    public show:boolean = false;
  public hide:boolean = true;
  public buttonName:any = 'Click to Leave Balance';
  public title1:any= 'LEAVE DETAILS';
    toggle() {
      this.show = !this.show;
      this.hide = !this.hide;
  
      // CHANGE THE NAME OF THE BUTTON.
      if(this.show)  {
        this.buttonName = "Click to Leave Details";
        this.title1 = "LEAVE BALANCE";
      }
      else{  
        this.buttonName = "Click to Leave Balance";
        this.title1 = "LEAVE DETAILS"
    }
  }

    search1(){
      if(this.SD_DOC1 == "")
      {
        this.ngOnInit();
      }
      else{
        this.credit_array = this.credit_array.filter((res: { BELNR: string; }) =>{
          return res.BELNR.toLocaleLowerCase().match(this.SD_DOC1.toLocaleLowerCase());
        })
      }
    }
    search(){
      if(this.SD_DOC == "")
      {
        this.ngOnInit();
      }
      else{
        this.debit_array = this.debit_array.filter((res: { BELNR: string; }) =>{
          return res.BELNR.toLocaleLowerCase().match(this.SD_DOC.toLocaleLowerCase());
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

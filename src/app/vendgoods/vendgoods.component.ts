import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { CustomerIdService } from '../customer-id.service';
declare var $: any;

@Component({
  selector: 'app-vendgoods',
  templateUrl: './vendgoods.component.html',
  styleUrls: ['./vendgoods.component.css']
})
export class VendgoodsComponent implements OnInit {

  received:any
  array:any=[]
  message:any;
  custnumber:any
  baseUrl : string='http://localhost:3000/goodsreceipt';
  Data: any;
  p :number=1;  
  SD_DOC:any;
 len:any;
 spinner=false;
 vendorid:any;
 header:any;
 headerarray:any=[];
 list:any=[];
 listarray:any=[];
 k:number=0;
 len1:any;
  constructor(private el: ElementRef, private renderer:Renderer2, private http:HttpClient,public router:Router, private customernumber:CustomerIdService) 
  {}

  ngOnInit(): any {
    this.vendorid=localStorage.getItem('vendorid')
    return this.http.post(this.baseUrl,{
      vendorid:this.vendorid
        }).subscribe(
          response =>{
            console.log(response)
            this.Data = JSON.parse(JSON.stringify(response));
            console.log(this.Data);
           this.header=this.Data.T_GOODS_HEAD.item;
           this.list=this.Data.T_GOODS_VALUES.item;
          // console.log(this.header);
           for(let i=1;i<this.header.length;i++){
            this.headerarray[i-1]=this.header[i];
           }
           this.len=this.headerarray.length;
           this.k=0;
           this.listarray=[];
           console.log(this.headerarray);
           this.spinner=true;
          //   this.custid=this.Data.IT_OUTPUT.KUNNR;
          //console.log(this.Data);
        
          }

        )
        
  }

  public show:boolean = false;
  public hide:boolean = true;
  public buttonName:any = 'Click to Credit Memo';
  public title1:any= 'DEBIT MEMO';
 

  onInvoiceClick(data:any){


    this.show = !this.show;
      this.hide = !this.hide;
  
      if(this.show)  {
        this.buttonName = "Back to Receipt";
        this.title1 = "CREDIT MEMO";
      }
      else{  
        this.buttonName = "Back to Receipt";
        this.title1 = "DEBIT MEMO"
    }

    
console.log(this.list,data["MAT_DOC"]);
this.listarray=[];
this.k=0;
for(let i=0;i<this.list.length;i++){
  if(this.list[i].MAT_DOC === data["MAT_DOC"]){
    this.listarray[this.k++]=this.list[i];
  }

  this.len1=this.listarray.length;
}
this.spinner=true;
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
  toggle() {
      this.show = !this.show;
      this.hide = !this.hide;
  
      // CHANGE THE NAME OF THE BUTTON.
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/home');
  }


}


import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { CustomerIdService } from '../customer-id.service';
declare var $:any;

@Component({
  selector: 'app-custcreditmemo',
  templateUrl: './custcreditmemo.component.html',
  styleUrls: ['./custcreditmemo.component.css']
})
export class CustcreditmemoComponent implements OnInit {

received:any
credit:any
debit:any
credit_array:any=[]
debit_array:any=[]
baseUrl : string='http://localhost:3000/credit';
Data: any;

p :number=1;  
  SD_DOC:any;
  SD_DOC1:any;
  lenc:any;
  lend:any;

  spinner=false
  constructor(private el: ElementRef, private renderer:Renderer2, private http:HttpClient,public router:Router, private customernumber:CustomerIdService) { }

  ngOnInit(): any {
    this.received=this.customernumber.getmessage();
    console.log(this.received);
    return this.http.post(this.baseUrl,{
      customerno:this.received
        }).subscribe(
          response =>{
            console.log(response)
            this.Data = JSON.parse(JSON.stringify(response));
            this.credit=(this.Data.IT_CRE.item);
            this.debit=(this.Data.IT_DEB.item);

            for(let i=1;i<this.credit.length;i++){
              this.credit_array[i-1]=this.credit[i]
              this.credit_array[i-1].BELNR=parseInt(this.credit_array[i-1].BELNR);
              this.credit_array[i-1].DMBTR=parseInt(this.credit_array[i-1].DMBTR);
              this.credit_array[i-1].GJAHR=parseInt(this.credit_array[i-1].GJAHR);
              this.credit_array[i-1].MENGE=parseInt(this.credit_array[i-1].MENGE);

            }
            for(let i=1;i<this.debit.length;i++){
              this.debit_array[i-1]=this.debit[i]
              this.debit_array[i-1].BELNR=parseInt(this.debit_array[i-1].BELNR);
              this.debit_array[i-1].DMBTR=parseInt(this.debit_array[i-1].DMBTR);
              this.debit_array[i-1].GJAHR=parseInt(this.debit_array[i-1].GJAHR);
              this.debit_array[i-1].MENGE=parseInt(this.debit_array[i-1].MENGE);
            }
            this.lenc=this.credit_array.length;
            this.lend=this.debit_array.length;
            console.log(this.credit.BELNR);
            console.log(this.debit.BELNR);

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
  public buttonName:any = 'Click to Credit Memo';
  public title1:any= 'DEBIT MEMO';
    toggle() {
      this.show = !this.show;
      this.hide = !this.hide;
  
      // CHANGE THE NAME OF THE BUTTON.
      if(this.show)  {
        this.buttonName = "Click to Debit Memo";
        this.title1 = "CREDIT MEMO";
      }
      else{  
        this.buttonName = "Click to Credit Memo";
        this.title1 = "DEBIT MEMO"
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

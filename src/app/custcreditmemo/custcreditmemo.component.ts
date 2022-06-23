import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { CustomerIdService } from '../customer-id.service';

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
            }
            for(let i=1;i<this.debit.length;i++){
              this.debit_array[i-1]=this.debit[i]
            }
            console.log(this.credit.BELNR);
            console.log(this.debit.BELNR);
            
            
          }
        )
    
  }
  

  ngAfterViewInit(){

    this.renderer.setStyle(this.el.nativeElement.ownerDocument.body,'backgroundColor', '#fce6d9');
    
    }

    public show:boolean = false;
  public hide:boolean = true;
  public buttonName:any = 'Click to Credit Memo';

    toggle() {
      this.show = !this.show;
      this.hide = !this.hide;
  
      // CHANGE THE NAME OF THE BUTTON.
      if(this.show)  
        this.buttonName = "Click to Debit Memo";
      else
        this.buttonName = "Click to Credit Memo";
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

}

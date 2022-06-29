import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CustomerIdService } from '../customer-id.service';
declare var $: any;

@Component({
  selector: 'app-vendpayment',
  templateUrl: './vendpayment.component.html',
  styleUrls: ['./vendpayment.component.css']
})
export class VendpaymentComponent implements OnInit {

  received: any
  array: any = []
  message: any;
  custnumber: any
  baseUrl: string = 'http://localhost:3000/vendorpayment';
  Data: any;
  p: number = 1;
  SD_DOC: any;
  len: any;
  spinner = false;
  vendorid: any;
  header: any;
  headerarray: any = [];

  list: any = [];
  listarray: any = [];
  k: number = 0;
  livedate:any;
  constructor(private el: ElementRef, private renderer: Renderer2, private http: HttpClient, public router: Router, private customernumber: CustomerIdService) { }

  ngOnInit(): any {
    this.vendorid = localStorage.getItem('vendorid')
    return this.http.post(this.baseUrl, {
      vendorid: this.vendorid
    }).subscribe(
      response => {
        console.log(response)
        this.Data = JSON.parse(JSON.stringify(response));
        this.header = this.Data.T_CLOSE.item;
        this.list = this.Data.T_OPEN.item;

        for(let i=0;i<this.list.length;i++)
        {
          if(this.list[i].DRAWER === ""){
          var due_date = new Date(this.list[i].BLINE_DATE);
          let curr_date = new Date();
          this.livedate=curr_date.toLocaleDateString();
          var time = curr_date.getTime() - due_date.getTime();
          var day = time / (1000 * 3600 * 24);
          if(Math.floor(day)>0){
            this.list[i].DRAWER = Math.floor(day);
          } 
          }
        }
        // console.log(this.header);
        // for (let i = 1; i < this.header.length; i++) {
        //   this.headerarray[i - 1] = this.header[i]
        // }
        // console.log(this.headerarray);
        this.k = 0;
        this.listarray = [];
        this.spinner = true


        //   this.custid=this.Data.IT_OUTPUT.KUNNR;
        //console.log(this.Data);

      }

    )

  }

  public show: boolean = false;
  public hide: boolean = true;
  public buttonName: any = 'Click to Payment Opened';
  public title1: any = 'PAYMENT CLOSED';




  toggle() {
    this.show = !this.show;
    this.hide = !this.hide;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  {
      this.buttonName = "Click to Payment Closed";
      this.title1 = "PAYMENT OPENED";
    }
    else{  
      this.buttonName = "Click to Payment Opened";
      this.title1 = "PAYMENT CLOSED"
  }
}

  ngAfterViewInit() {

    this.renderer.setStyle(this.el.nativeElement.ownerDocument.body, 'backgroundColor', '#fff0f0');
    $(document).ready(function () {
      $(".hamburger").click(function () {
        $(".wrapper").toggleClass("collapsed");
      });
    });

  }

  search() {
    if (this.SD_DOC == "") {
      this.ngOnInit();
    }
    else {
      this.message = this.message.filter((res: { SD_DOC: string; }) => {
        return res.SD_DOC.toLocaleLowerCase().match(this.SD_DOC.toLocaleLowerCase());
      })
    }
  }

  key: string = 'SD_DOC';
  reverse: boolean = false;
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }




}

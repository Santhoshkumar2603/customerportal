import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CustomerIdService } from '../customer-id.service';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { TablevalueService} from '../tablevalue.service';
import jspdf from 'jspdf';  
import html2canvas from 'html2canvas';  
declare var $:any;

@Component({
  selector: 'app-vendinvdet',
  templateUrl: './vendinvdet.component.html',
  styleUrls: ['./vendinvdet.component.css']
})
export class VendinvdetComponent implements OnInit {


  received: any
  array: any = []
  message: any;
  custnumber: any
  baseUrl: string = 'http://localhost:3000/vendorinvdet';
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
  curtype:any;
  year:any;
  date:any;
  time:any;
  type:any;
  ponum:any;
  tax:any=0;
  livedate: any;
  total:number=0;
  constructor(private el: ElementRef, private renderer:Renderer2, private customernumber : CustomerIdService,public router:Router, private http:HttpClient, private table:TablevalueService) { }


  ngOnInit(): any {
    this.vendorid = localStorage.getItem('vendinvoicetable')
    return this.http.post(this.baseUrl, {
      vendorid: this.vendorid
    }).subscribe(
      response => {
        console.log(response)
        this.Data = JSON.parse(JSON.stringify(response));
        this.header = this.Data.INV_DET.item;
        console.log(this.header.length)
        // this.list = this.Data.RFQ_VALUES.item;
        // console.log(this.header);
        if(this.header.length === undefined)
        {
          this.headerarray[0]=this.header;
          this.total=this.header.WRBTR;
        }
        else{
        for (let i = 0; i < this.header.length; i++) {
          this.headerarray[i] = this.header[i]
          this.total+=parseInt(this.header[i].WRBTR)
        }
      }
      this.len=this.headerarray.length
        // console.log(this.headerarray);
        this.k = 0;
        this.listarray = [];
        this.spinner = true;

        let curr_date = new Date();
        this.livedate=curr_date.toLocaleDateString();

       this.curtype=sessionStorage.getItem('vendcurtype');
       this.date=sessionStorage.getItem('venddate');
       this.time=sessionStorage.getItem('vendtime');
       this.year=sessionStorage.getItem('vendyear');
       this.type=sessionStorage.getItem('vendtype');
      

        //   this.custid=this.Data.IT_OUTPUT.KUNNR;
        //console.log(this.Data);

      }

    )

  }

  // public show: boolean = false;
  // public hide: boolean = true;
  // public buttonName: any = 'Click to Credit Memo';
  // public title1: any = 'DEBIT MEMO';


  // onInvoiceClick(data: any) {


  //   this.show = !this.show;
  //   this.hide = !this.hide;

  //   if (this.show) {
  //     this.buttonName = "Back to PO Order";
  //     this.title1 = "CREDIT MEMO";
  //   }
  //   else {
  //     this.buttonName = "Back to PO Order";
  //     this.title1 = "DEBIT MEMO"
  //   }


  //   console.log(this.list, data["PO_NUMBER"]);
  //   this.listarray = [];
  //   this.k = 0;
  //   for (let i = 0; i < this.list.length; i++) {
  //     if (this.list[i].PO_NUMBER === data["PO_NUMBER"]) {
  //       this.listarray[this.k++] = this.list[i];
  //     }
  //   }
  //   this.spinner = true;
  // }

  // toggle() {
  //   this.show = !this.show;
  //   this.hide = !this.hide;

    
  // }

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

  public pdf(){
    var data:any = document.getElementById('contentToConvert');  //Id of the table
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      let imgWidth = 208;   
      let pageHeight = 295;    
      let imgHeight = canvas.height * imgWidth / canvas.width;  
      let heightLeft = imgHeight;  

      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      let position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('VendorInvoice_Slip.pdf'); // Generated PDF   
    });  
  }



}

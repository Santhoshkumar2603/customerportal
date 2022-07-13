import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { CustomerIdService } from '../customer-id.service';
import { TablevalueService } from '../tablevalue.service';
declare var $:any;

@Component({
  selector: 'app-emppayslip',
  templateUrl: './emppayslip.component.html',
  styleUrls: ['./emppayslip.component.css']
})
export class EmppayslipComponent implements OnInit {

  received:any
  array:any=[]
  message:any;
  custnumber:any
  baseUrl : string='http://localhost:3000/epaydet';
  baseUrl1 : string='http://localhost:3000/epaypdf';
  Data: any;
  Data1: any;
 sales:any=[];
spinner=false
 p :number=1;  
  SD_DOC:any;
  len:any;
paypdf:any;

  constructor(private el: ElementRef, private renderer:Renderer2, private http:HttpClient,public router:Router, private customernumber:CustomerIdService, private table:TablevalueService) 
  {}

  ngOnInit(): any {
    this.received= localStorage.getItem('empid')
    console.log(this.received);
    return this.http.post(this.baseUrl,{
      invoiceno:this.received
        }).subscribe(
          response =>{
            console.log(response)
            this.Data = JSON.parse(JSON.stringify(response));
            
            this.message=(this.Data.PAYSLIP_DET.item);
            let k = 0;
        
        this.spinner=true
        this.len=this.message.length;
            console.log(this.message);

          }
        )
    }
    onInvoiceClick(data:any){
      console.log(data["SEQUENCENUMBER"])
      this.paypdf= data["SEQUENCENUMBER"];
      this.received= localStorage.getItem('empid')
      return this.http.post(this.baseUrl1,{
        empId:this.received,
        seqnumber:this.paypdf
          }).subscribe(
            response =>{
              console.log(response)
              this.Data1 = JSON.parse(JSON.stringify(response));
              const linkSource = `data:application/pdf;base64,${this.Data1.BASE64}`; 
              const downloadLink = document.createElement("a"); 
              const fileName = "Salary_Payslip.pdf"; 
              downloadLink.href = linkSource; 
              downloadLink.download = fileName; downloadLink.click();
              
             
  
            }
          )
      
      
    
  
      // window.open(url, '_blank');
     
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
        this.sales = this.sales.filter((res: { SD_DOC: string; }) =>{
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

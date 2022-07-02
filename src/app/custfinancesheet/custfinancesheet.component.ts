import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerIdService } from '../customer-id.service';
declare var $: any;

@Component({
  selector: 'app-custfinancesheet',
  templateUrl: './custfinancesheet.component.html',
  styleUrls: ['./custfinancesheet.component.css']
})
export class CustfinancesheetComponent implements OnInit {

  received : any;

  constructor(private el: ElementRef, private renderer:Renderer2, public router: Router, private customernumber:CustomerIdService) { }


  ngOnInit(): void {
    this.received=this.customernumber.getmessage();
    console.log(this.received);
  }

  ngAfterViewInit(){

    this.renderer.setStyle(this.el.nativeElement.ownerDocument.body,'backgroundColor', '#fff0f0');

    $(document).ready(function () {
      $(".hamburger").click(function () {
          $(".wrapper").toggleClass("collapsed");
      });
  });
    
    }
    logout(){
      localStorage.clear();
      this.router.navigateByUrl('/home');
    }

}

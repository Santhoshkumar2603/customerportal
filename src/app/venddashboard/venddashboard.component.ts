import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-venddashboard',
  templateUrl: './venddashboard.component.html',
  styleUrls: ['./venddashboard.component.css']
})
export class VenddashboardComponent implements OnInit {

  constructor(private el: ElementRef, private renderer:Renderer2, public router: Router) { }

  ngOnInit(): void {
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
      // localStorage.clear();
      localStorage.removeItem('vendorid');
      this.router.navigateByUrl('/home');
    }
}

import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-custdashboard',
  templateUrl: './custdashboard.component.html',
  styleUrls: ['./custdashboard.component.css']
})
export class CustdashboardComponent implements OnInit {

  constructor(private el: ElementRef, private renderer:Renderer2, public router: Router) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){

    this.renderer.setStyle(this.el.nativeElement.ownerDocument.body,'backgroundColor', '#fce6d9');
    
    }
    // salesorder(){

    //   this.router.navigateByUrl('/custsalesorder');
    // }

}



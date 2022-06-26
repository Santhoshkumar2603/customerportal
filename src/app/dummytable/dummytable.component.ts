import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dummytable',
  templateUrl: './dummytable.component.html',
  styleUrls: ['./dummytable.component.css']
})
export class DummytableComponent implements OnInit {

  constructor(private el: ElementRef, private renderer:Renderer2) { }

  public show:boolean = false;
  public hide:boolean = true;
  public buttonName:any = 'Show';

  ngOnInit(): void {
  }
  ngAfterViewInit(){

    this.renderer.setStyle(this.el.nativeElement.ownerDocument.body,'backgroundColor', '#fff0f0');
    
    }

    toggle() {
      this.show = !this.show;
      this.hide = !this.hide;
  
      // CHANGE THE NAME OF THE BUTTON.
      if(this.show)  
        this.buttonName = "Hide";
      else
        this.buttonName = "Show";
    }

}

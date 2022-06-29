import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-dummytable',
  templateUrl: './dummytable.component.html',
  styleUrls: ['./dummytable.component.css']
})
export class DummytableComponent implements OnInit {

  constructor(private el: ElementRef, private renderer:Renderer2, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngAfterViewInit(){

    this.renderer.setStyle(this.el.nativeElement.ownerDocument.body,'backgroundColor', '#fff0f0');
    
    }

}
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'table.html',
})
export class DialogContentExampleDialog {}
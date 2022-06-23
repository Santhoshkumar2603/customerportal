import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TablevalueService {

  constructor() { }
  table:any;
  setmessage(custno:any){
    this.table=custno;
  }
  getmessage(){
    return this.table;
  }
}

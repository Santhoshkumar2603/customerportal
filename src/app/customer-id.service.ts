import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerIdService {

  constructor() { }
  customernumber:any
  setmessage(custno:any){
    this.customernumber=custno;
  }
  getmessage(){
    return this.customernumber;
  }
}

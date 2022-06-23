import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustbillService {

  message:any
customerno:any;
array:string[]=[];
  constructor() { }
  setMessage(data: any,custno:any){
    this.message=data;
    this.customerno=custno;
  }
  getMessage(){
    this.array[0]=this.message;
    this.array[1]=this.customerno;
    return this.array;
  }
  
}

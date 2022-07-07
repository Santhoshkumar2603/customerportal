import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor() { }
  IsloggedIn(){
    return !!localStorage.getItem('vendorid');
  }
}

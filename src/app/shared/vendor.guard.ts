import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { VendorService } from './vendor.service';

@Injectable({
  providedIn: 'root'
})
export class VendorGuard implements CanActivate {

  constructor(private auth: VendorService, private router: Router){

  }
  canActivate() {
    if(this.auth.IsloggedIn()){
      return true;
    }
    alert("Please Login !!!")
    this.router.navigateByUrl('/vendlogin');
    return false;
  }
  
}

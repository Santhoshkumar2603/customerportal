import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EmpService } from './emp.service';

@Injectable({
  providedIn: 'root'
})
export class EmpGuard implements CanActivate {

  constructor(private auth: EmpService, private router: Router){

  }
  canActivate() {

    if(this.auth.IsloggedIn()){
      return true;
    }
    alert("Please Login !!!")
    this.router.navigateByUrl('/emplogin');
    return false;
  }
  
}

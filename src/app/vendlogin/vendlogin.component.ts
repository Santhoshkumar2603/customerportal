import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vendlogin',
  templateUrl: './vendlogin.component.html',
  styleUrls: ['./vendlogin.component.css']
})
export class VendloginComponent implements OnInit {

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }
  
  login = this.fb.group({
    username : [''],
    password : ['']
  })
  ngOnInit(): void {
  }

  baseUrl : string='http://localhost:3000/vendorlogin';
  
  Data: any;
  f=true
  
  submit(){
    this.getLoginRes((this.login.value.username), (this.login.value.password));
  }
  getLoginRes(user: any , password: any ){
    return this.http.post(this.baseUrl,{
      vendorid:user,
      password:password
    }).subscribe(
      response =>{
        console.log(response)
        this.Data = JSON.parse(JSON.stringify(response));
        console.log(this.Data);
        if(this.Data.BAPIRET.TYPE === 'S'){
  
          localStorage.setItem('vendorid',user.toString());
          localStorage.setItem('vendname',this.Data.NAME);
          this.router.navigateByUrl('/venddashboard');
        }
        else{
          console.log("Invalid");
          this.f=false;
          setTimeout(() => {
            console.log('Test');
            this.f=true
            // this.timeout();
        }, 3000);
          
          
          
        }
      }
    )
  }

}

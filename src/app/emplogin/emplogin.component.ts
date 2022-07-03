import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emplogin',
  templateUrl: './emplogin.component.html',
  styleUrls: ['./emplogin.component.css']
})
export class EmploginComponent implements OnInit {

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  login = this.fb.group({
    username : [''],
    password : ['']
  })
  ngOnInit(): void {
  }

  baseUrl : string='http://localhost:3000/elogin';
  
  Data: any;
  f=true
  
  submit(){
    this.getLoginRes((this.login.value.username), (this.login.value.password));
  }
  getLoginRes(user: any , password: any ){
    return this.http.post(this.baseUrl,{
      username:user,
      password:password
    }).subscribe(
      response =>{
        console.log(response)
        this.Data = JSON.parse(JSON.stringify(response));
        console.log(this.Data);
        if(this.Data.RESULT === 'S'){
  
          localStorage.setItem('empid',user.toString());
          // localStorage.setItem('empid',this.Data.RESULT);
          this.router.navigateByUrl('/empdashboard');
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

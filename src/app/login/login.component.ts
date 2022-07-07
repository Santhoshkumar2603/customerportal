import { Component, OnInit } from '@angular/core';
import { faTwitter,  faFacebookF, faInstagram, faYoutube, } from '@fortawesome/free-brands-svg-icons';
import { FormBuilder } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CustomerIdService } from '../customer-id.service';


@Component({
  selector: 'app-login', 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  faFacebook = faFacebookF;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faYoutube = faYoutube;

  

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private customernumber:CustomerIdService) { }
  
  login = this.fb.group({
    username : [''],
    password : ['']
  })
  ngOnInit(): void {
  }

  baseUrl : string='http://localhost:3000/login';
  
  Data: any;
  f=true
  
  submit(){
    this.getLoginRes(parseInt(this.login.value.username), parseInt(this.login.value.password));
  }
  getLoginRes(user: Number , password: Number ){
    if(user === NaN || password === NaN){
      this.f=false;
      setTimeout(() => {
        console.log('Test');
        this.f=true
        // this.timeout();
    }, 3000);

    }
    return this.http.post(this.baseUrl,{
      username:user,
      password:password
    }).subscribe(
      response =>{
        console.log(response)
        this.Data = JSON.parse(JSON.stringify(response));
        console.log(this.Data);
        if(this.Data.E_BAPIRET["TYPE"] === 'S'){
          // localStorage.setItem(''+user,''+password);
          console.log(user.toString()+"vaaaaa");
          // user1:string=user.toString();
          localStorage.setItem('userid',user.toString());
           this.customernumber.setmessage(user);
           sessionStorage.setItem('custname',this.Data.E_NAME)
          this.router.navigateByUrl('/custdashboard');
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


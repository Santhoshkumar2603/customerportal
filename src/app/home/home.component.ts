import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faTwitter,  faFacebookF, faInstagram, faYoutube, } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faFacebook = faFacebookF;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faYoutube = faYoutube;

  constructor(public router: Router) { 
    
  }

  ngOnInit(): void {
  }

}

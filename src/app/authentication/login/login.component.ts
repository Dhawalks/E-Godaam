import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../authService';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  verified:boolean = false;

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  onSignin(form:NgForm){
    const email = form.value.inputEmail;
    const password = form.value.inputPassword;
    this.verified = this.authService.sinInUser(email, password);
    this.verified = !this.authService.isAuthenticated();

    
  }

}

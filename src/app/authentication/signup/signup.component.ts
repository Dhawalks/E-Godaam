import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../authService';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  onSignUp(form:NgForm){
    const email = form.value.inputEmail;
    const fullname = form.value.fullname;
    const dob = form.value.dob;
    const password = form.value.inputPassword;
    const mobile = form.value.mobile;
    // console.log(email);

    this.authService.signUpUser(email, password,fullname, dob, mobile);

  }

}

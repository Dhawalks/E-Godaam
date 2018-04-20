import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCWfqAlgu4EAeK6PgsX-xpQcU9BtnNwgTA",
    authDomain: "e-godaam.firebaseapp.com",
    databaseURL: "https://e-godaam.firebaseio.com",
    projectId: "e-godaam",
    storageBucket: "e-godaam.appspot.com",
    messagingSenderId: "35431438025"
    });
  
  }
  title = 'app';
}

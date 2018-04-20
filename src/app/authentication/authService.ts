import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService{
    token:string;
    constructor(private router:Router, private http:HttpClient){}
    signUpUser(userId:string, password:string, fullname:string, dob:string, mobile:string){
        var x:{userId:string, password:string, fullname:string, dob:string, mobile:string} = {userId, password, fullname, dob, mobile};
        firebase.auth().createUserWithEmailAndPassword(userId, password).catch(
            error => {
                console.log(error);
            }  
        );
        // Observable.interval(2000, )
        // this.saveData(userId, password, x);
        this.router.navigate(["/login"]);
        
    }

    sinInUser(userId:string, password:string){
        var verified = true;
        firebase.auth().signInWithEmailAndPassword(userId, password).then(
            response => {
                this.router.navigate(["/user/"+userId+"/overview"]);
                firebase.auth().currentUser.getToken().then(
                    (token:string) =>{
                        this.token = token;
                    }
                )
            }
        ).catch(
            error => {
                verified = false;
            }
        )
        return verified;

    }

    getToken(){
        return this.token;
        // firebase.auth().currentUser.linkAndRetrieveDataWithCredential().
    }

    saveData(userId:string, password:string, x:any){
        var token = null;
        // while(token === null){
            firebase.auth().signInWithEmailAndPassword(userId, password).then(
                response => {
                    token = firebase.auth().currentUser.getToken();
                }
                    )
            .catch(
                error => console.log(error)
            )
        // }
        var uid = firebase.auth().currentUser.uid;
        console.log(uid);
        this.http.put("https://e-godaam.firebaseio.com/users/"+uid+"/details.json?auth="+token, x).subscribe(
            (response:Response) => console.log(response)
        )
        

    }

    isAuthenticated(){
        return this.token != null;
    }
}
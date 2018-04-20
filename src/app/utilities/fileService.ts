import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { HttpHeaders, HttpRequest } from '@angular/common/http';
import { catchError, last, map, tap } from 'rxjs/operators';
import "rxjs/add/operator/map";
import { StorageService } from "../user/storageService";
import { HttpClient } from '@angular/common/http';
import { AuthService } from "../authentication/authService";
import * as firebase from "firebase";
import { Url } from "url";
import { Subject } from "rxjs";

@Injectable()
export class FileService {

    constructor(private http: HttpClient, private storageService: StorageService, private authService: AuthService) { }

    fetchFiles(type: string) {
        this.http.get('https://e-godaam.firebaseio.com/users/' + firebase.auth().currentUser.uid
            + '/' + type + '.json?auth=' + this.authService.getToken()).map(
                (response: Response) => {
                    //  const x:JSON[] = response.json();
                    const imageUrl: Url[] = [];
                    var keys;
                    if (response != null) {
                        console.log(response);
                        keys = Object.keys(response);
                        for (let key of keys) {
                            imageUrl.push(response[key].url);
                        }
                    }
                    return imageUrl;

                }
            ).subscribe(
                (imageUrl: Url[]) => {
                    this.storageService.setFiles(imageUrl);
                }
            )
    }

    saveFile(file: File, type: string) {
        const fd = new FormData();
        fd.append('image', file, file.name);
        this.http.post('https://us-central1-e-godaam.cloudfunctions.net/uploadFile?auth=' + this.authService.getToken(), fd).subscribe(
            res => {
                console.log(res);
                firebase.storage().ref().child(file.name).getDownloadURL()
                    .then(
                        (url: Url) => {
                            // console.log(url);
                            // this.image = url;
                            // this.storageService.setFiles(url);
                            this.http.post('https://e-godaam.firebaseio.com/users/' +
                                firebase.auth().currentUser.uid + '/' + type + '.json?auth=' + this.authService.getToken(), { url })
                                .subscribe(
                                    res => console.log(res)
                                )
                        }).catch(
                            err => {
                                console.log(err)
                            });
            });
    }
}
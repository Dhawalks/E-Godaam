import { Injectable } from "@angular/core";
import { Url } from "url";
import { Subject } from "rxjs";


@Injectable()
export class StorageService{
    files:Url[]=[];
    filesChanged = new Subject<Url[]>();

    constructor(){}
    getFiles(){
        console.log(this.files.length);
       return this.files.slice(); 
    }

    setFiles(url:Url[]){
        this.files = url;
        this.filesChanged.next(this.files.slice());
    }
}
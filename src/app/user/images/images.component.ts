import { Component, OnInit } from '@angular/core';
import { FileService } from '../../utilities/fileService';
import { StorageService } from '../storageService';
import { Router } from '@angular/router';
import { Url } from 'url';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  files:Url[]=[];
  type:string="images";
  subscription:Subscription;
  constructor(private storageService:StorageService, private fileService:FileService, private router:Router) { }

  ngOnInit() {
    this.fileService.fetchFiles(this.type);
    this.subscription = this.storageService.filesChanged.subscribe(
      (urls:Url[]) => {
        this.files = urls;
        console.log(this.files.length);
      }
    )
   
    
  }

  onUpload(){
    this.router.navigate(["/user/1/upload"]);
  }

}

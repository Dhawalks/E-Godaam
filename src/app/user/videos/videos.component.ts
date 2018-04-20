import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Url } from 'url';
import { Subscription } from 'rxjs';
import { StorageService } from '../storageService';
import { FileService } from '../../utilities/fileService';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  
  files:Url[]=[];
  type:string="videos";
  subscription:Subscription;
  constructor(private storageService:StorageService, private fileService:FileService, private router:Router) { }

  ngOnInit() {
    this.fileService.fetchFiles(this.type);
    this.subscription = this.storageService.filesChanged.subscribe(
      (urls:Url[]) => {
        this.files = urls;
        console.log(this.files.length);
      }
    )}
    
  onUpload(){
    this.router.navigate(["/user/1/upload"]);
  }
}

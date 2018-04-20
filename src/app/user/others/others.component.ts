import { Component, OnInit } from '@angular/core';
import { Url } from 'url';
import { Subscription } from 'rxjs';
import { StorageService } from '../storageService';
import { FileService } from '../../utilities/fileService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit {

  files:Url[]=[];
  type:string="others";
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

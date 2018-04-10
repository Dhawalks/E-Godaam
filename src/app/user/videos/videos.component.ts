import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos:string[] = ["../../../assets/folder.png", "../../../assets/contactUs.png","../../../assets/folder.png", "../../../assets/contactUs.png", "../../../assets/contactUs.png", "../../../assets/contactUs.png", "../../../assets/contactUs.png", "../../../assets/contactUs.png", "../../../assets/contactUs.png"];


  constructor() { }

  ngOnInit() {
  }

}

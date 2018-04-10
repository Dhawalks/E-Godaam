import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  images:string[] = ["../../../assets/folder.png", "../../../assets/contactUs.png","../../../assets/folder.png", "../../../assets/contactUs.png", "../../../assets/contactUs.png", "../../../assets/contactUs.png", "../../../assets/contactUs.png", "../../../assets/contactUs.png", "../../../assets/contactUs.png"];

  constructor() { }

  ngOnInit() {
  }

}

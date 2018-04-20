import { Component, OnInit } from '@angular/core';
import { FileService } from '../../utilities/fileService';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  selectedFile:File = null;
  type:string="";
  constructor(private fileService:FileService) { }

  ngOnInit() {
  }

  onFileSelected(event){

    this.selectedFile = <File>event.target.files[0];
  }
  onSubmit(form:NgForm){
    this.type = form.value.type;
    console.log(this.type);
    this.fileService.saveFile(this.selectedFile, this.type);
    
  }

}

import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {FileUploader} from 'ng2-file-upload';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
@Injectable()
export class FileUploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public uploader:FileUploader = new FileUploader({url:'/file/upload'});
}

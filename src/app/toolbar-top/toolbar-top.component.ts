import { Component, OnInit } from '@angular/core';
import { LanguagesService } from "../share-data/languages.service";

@Component({
  selector: 'app-toolbar-top',
  templateUrl: './toolbar-top.component.html',
  styleUrls: ['./toolbar-top.component.css'],

})
export class ToolbarTopComponent implements OnInit {

  title: String;
  constructor(private lang: LanguagesService) { 
  
  }

  ngOnInit() {
    this.lang.currentLanguges.subscribe(message => this.title = message['myTask']);
  }
}

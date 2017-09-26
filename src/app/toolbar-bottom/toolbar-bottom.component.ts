import { Component, OnInit } from '@angular/core';
import { LanguagesService } from "../share-data/languages.service";

@Component({
  selector: 'app-toolbar-bottom',
  templateUrl: './toolbar-bottom.component.html',
  styleUrls: ['./toolbar-bottom.component.css']
  
})
export class ToolbarBottomComponent implements OnInit {

  skip : any;
  langChoose = 'English';
  constructor(private lang: LanguagesService) {
    this.changeLang('en-us');
   }

  ngOnInit() {
    this.lang.currentLanguges.subscribe(message => this.skip = message['skip']);
  }
  changeLang(langchoose){
    this.lang.changeLanguages(langchoose);
  }
}

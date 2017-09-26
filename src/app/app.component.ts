import { Component, OnInit } from '@angular/core';
import { LanguagesService } from "./share-data/languages.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [LanguagesService],
})
export class AppComponent {
  constructor(private lang: LanguagesService){

  }
}
@Component({
  selector: 'app-greeting',
  templateUrl: './app-greeting.component.html',
  styleUrls: ['./app-greeting.component.css'],
})
export class AppGreetingComponent implements OnInit {
  greetingLbl1 = '';
  greetingLbl2 = '';
  constructor(private lang: LanguagesService){}

  ngOnInit() {
    this.lang.currentLanguges.subscribe(message => this.greetingLbl1 = message['greeting1']);
  }
}

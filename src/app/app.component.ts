import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router, Scroll } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { delay, filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(  public translate: TranslateService)
  {
    translate.addLangs(['en','he']);
    // Set default language
    translate.currentLang='en';
    translate.setDefaultLang('en');
//this.setScrolToTopRoutes();    
  }
  title = 'personal';
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }

 

}

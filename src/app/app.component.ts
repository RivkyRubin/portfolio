import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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
  title = 'Rivky Rubin';
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }

 

}

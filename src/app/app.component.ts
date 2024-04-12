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
    translate.addLangs(['he','en']);
    // Set default language
    translate.currentLang='he';
    translate.setDefaultLang('he');
//this.setScrolToTopRoutes();    
  }
  title = 'Rivky Rubin';
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }

 

}

import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { interval, tap } from 'rxjs';
import { IExperience } from '../models/experience.model';
import { IRecommendation } from '../models/recommendation.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  experiences: IExperience[] = [];
  technologies: string[] = [];
  recommendations: IRecommendation[] = [];
  showName=false;
  showScroll=false;
  constructor(
    private dataService: DataService,
    private translate: TranslateService,
    carouselConfig: NgbCarouselConfig,
    private meta: Meta,private title: Title
  ) {
    carouselConfig.pauseOnHover = true;
    carouselConfig.interval = 10000;
    this.meta.addTags([
      {name: 'description', content: 'Home page of full stack developer portfolio'},
      {name: 'author', content: 'Rivky Rubin'},
      {name: 'keywords', content: 'fullstack developer, Website developer, application developer'}
    ]);
    //this.title.setTitle('Developer Home Page');
  }

  ngOnInit(): void {
    this.experiences = this.dataService.getExperiences();
    this.technologies = this.dataService.getTechnologies();
    this.recommendations = this.dataService.getRecommendations();
    setTimeout(() => {
       this.showName=true;
    }, 3000);
    setTimeout(() => {
      this.showScroll=true;
   }, 6000);
  }
}

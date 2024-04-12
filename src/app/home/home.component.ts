import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { filter, from, interval, map, tap } from 'rxjs';
import { IExperience } from '../models/experience.model';
import { IRecommendation } from '../models/recommendation.model';
import { DataService } from '../services/data.service';
import { IProject } from '../models/project.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  experiences: IExperience[] = [];
  technologies: string[] = [];
  recommendations: IRecommendation[] = [];
  projects: IProject[] = [];
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
    // this.meta.addTags([
    //   {name: 'description', content: 'Web developer portfolio'},
    //   {name: 'author', content: 'Rivky Rubin'},
    //   {name: 'keywords', content: 'fullstack developer, Web developer, web development, application developer, freelance developer,פיתוח אתר,פיתוח אפליקציות,מפתח אתרים, מפתח פרילנסר'}
    // ]);
  }

  ngOnInit(): void {
    this.experiences = this.dataService.getExperiences();
    this.technologies = this.dataService.getTechnologies();
    this.recommendations = this.dataService.getRecommendations();
    this.projects = this.dataService.getProjects();
    setTimeout(() => {
       this.showName=true;
    }, 1000);
    setTimeout(() => {
      this.showScroll=true;
   }, 3000);
  }
  scrollDown(){
    let el = document.getElementById('testimonials');
    el!.scrollIntoView({behavior: 'smooth'});

  }
}

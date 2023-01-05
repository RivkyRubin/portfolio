import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { interval } from 'rxjs';
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
  constructor(
    private dataService: DataService,
    carouselConfig: NgbCarouselConfig
  ) {
    carouselConfig.pauseOnHover = true;
  }

  ngOnInit(): void {
    this.experiences = this.dataService.getExperiences();
    this.technologies = this.dataService.getTechnologies();
    this.recommendations = this.dataService.getRecommendations();
    setTimeout(() => {
       this.showName=true;
    }, 3000);
  }
}

import { Injectable } from '@angular/core';
import { IData } from '../models/data.model';
import { IExperience } from '../models/experience.model';
import { IProject } from '../models/project.model';
import { IRecommendation } from '../models/recommendation.model';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  data: IData = require('../../assets/data/data.json');

  constructor() {}

  getExperiences(): IExperience[] {
    return this.data.experiences;
  }
  getTechnologies(): string[] {
    return this.data.technologies;
  }
  getProjects(): IProject[] {
    return this.data.projects;
  }
  getRecommendations(): IRecommendation[] {
    return this.data.recommendations;
  }
}

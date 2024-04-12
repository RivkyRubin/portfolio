import { IExperience } from "./experience.model";
import { IProject } from "./project.model";
import { IRecommendation } from "./recommendation.model";

export interface IData{
    experiences: IExperience[],
    technologies:string[],
    recommendations:IRecommendation[],
    projects: IProject[]
}
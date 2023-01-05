import { IExperience } from "./experience.model";
import { IRecommendation } from "./recommendation.model";

export interface IData{
    experiences: IExperience[],
    technologies:string[],
    recommendations:IRecommendation[]
}
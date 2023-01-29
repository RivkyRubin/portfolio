import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-plany',
  templateUrl: './plany.component.html',
  styleUrls: ['./plany.component.scss']
})
export class PlanyComponent implements OnInit {
   images:number[];
   wideImages:number[]
   showNavigationArrows=false;
  constructor(private meta:Meta,private title:Title) {
    this.meta.addTags([
      {name: 'description', content: 'Plany is a website for managing events easily'},
      {name: 'author', content: 'Rivky Rubin'},
      {name: 'keywords', content: 'Plany, events planner, todo list'}
    ]);
    this.title.setTitle('Plany - Events Planner')
   }

  ngOnInit(): void {
    let el = document.getElementsByClassName('page-content')[0];
    el.scroll({ 
            top: 0, 
            left: 0
     });
    this.images = [1,2,3,4];
    this.wideImages = [1,2,3];
  }

}

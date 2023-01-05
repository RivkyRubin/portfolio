import { Component, OnInit } from '@angular/core';
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
  constructor() { }

  ngOnInit(): void {
    let el = document.getElementsByClassName('page-content')[0];
    el.scroll({ 
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
     });
    this.images = [1,2,3,4];
    this.wideImages = [1,2,3];
  }

}

import { Component, OnInit } from '@angular/core';
import {transition, trigger, useAnimation} from '@angular/animations';
import {pulse} from 'ngx-animate/lib';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],

})
export class MenuComponent implements OnInit {
  imagesUrl: string[];
  imagesHover: string[];
  menu1: string;
  menu2: string;
  menu3: string;


  constructor() {


  }

  ngOnInit(): void {
    this.imagesUrl = [
      '/assets/Iconos/MiCue.png',
      '/assets/Iconos/Inst.png',
      '/assets/Iconos/Info.png'
    ];
    this.imagesHover = [
      '/assets/Iconos/MiCueFocus.png',
      '/assets/Iconos/InstFocus.png',
      '/assets/Iconos/InfoFocus.png'
    ];

    this.menu1 = this.imagesUrl[0];
    this.menu2 = this.imagesUrl[1];
    this.menu3 = this.imagesUrl[2];
  }


  // tslint:disable-next-line:typedef
  hoverImage(ev) {
    switch (ev.target.id) {
      case '0':
        this.menu1 = this.imagesHover[ev.target.id];
        break;
      case '1':
        this.menu2 = this.imagesHover[ev.target.id];
        break;
      case '2':
        this.menu3 = this.imagesHover[ev.target.id];
        break;
    }

  }

  // tslint:disable-next-line:typedef
  outHoverImage(ev) {
    switch (ev.target.id) {
      case '0':
        this.menu1 = this.imagesUrl[ev.target.id];
        break;
      case '1':
        this.menu2 = this.imagesUrl[ev.target.id];
        break;
      case '2':
        this.menu3 = this.imagesUrl[ev.target.id];
        break;
    }
  }

}

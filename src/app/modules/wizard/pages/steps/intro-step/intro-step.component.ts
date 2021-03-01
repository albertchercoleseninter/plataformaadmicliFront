import { Component, OnInit } from '@angular/core';
import {transition, trigger, useAnimation} from '@angular/animations';
import {fadeIn} from 'ngx-animate/lib';

@Component({
  selector: 'app-intro-step',
  templateUrl: './intro-step.component.html',
  styleUrls: ['./intro-step.component.scss'],
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))])
  ],
})
export class IntroStepComponent implements OnInit {
  fadeIn: any;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-step',
  templateUrl: './resume-step.component.html',
  styleUrls: ['./resume-step.component.scss']
})
export class ResumeStepComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.removeItem('MainPromoter');
  }

}

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SharedService} from '../../../../shared/shared.service';

@Component({
  selector: 'app-steps-bar',
  templateUrl: './steps-bar.component.html',
  styleUrls: ['./steps-bar.component.scss']
})
export class StepsBarComponent implements OnInit {
  isSuccessStep1: any;
  isActiveStep1: any;

  isSuccessStep2: any;
  isActiveStep2: any;

  isSuccessStep3: any;
  isActiveStep3: any;

  isSuccessStep4: any;
  isActiveStep4: any;

  constructor(
    private router: Router,
    private sharedService: SharedService) {

    this.resetBar();

  }

  ngOnInit(): void {
    this.sharedService.sharedCurrentUrl.subscribe(currentUrl => {
      if (currentUrl.back !== true) {
        this.getStepsActive(currentUrl.url);
      } else {
        this.getBackStepsActive(currentUrl.url);
      }

    });
  }

  getStepsActive(href: string) {
    switch (href) {
      case '/wizard/intro':
        this.isActiveStep1 = 'is-active';
        this.isSuccessStep1 = 'is-success';
        break;

      case '/wizard/promoter':
        this.isActiveStep2 = 'is-active';
        this.isSuccessStep2 = 'is-success';
        break;

      case '/wizard/alerts':
        this.isActiveStep3 = 'is-active';
        this.isSuccessStep3 = 'is-success';
        break;

      case '/wizard/resume':
        this.isActiveStep4 = 'is-active';
        this.isSuccessStep4 = 'is-success';
        break;
    }
  }

  getBackStepsActive(href: string) {
    this.resetBar();
    switch (href) {

      case '/wizard/intro':
        break;

      case '/wizard/promoter':
        break;

      case '/wizard/alerts':
        this.isActiveStep1 = 'is-active';
        this.isSuccessStep1 = 'is-success';
        break;

      case '/wizard/resume':
        this.isActiveStep1 = 'is-active';
        this.isSuccessStep1 = 'is-success';
        this.isActiveStep2 = 'is-active';
        this.isSuccessStep2 = 'is-success';
        break;
    }
  }

  resetBar() {
    this.isSuccessStep1 = '';
    this.isActiveStep1 = '';

    this.isSuccessStep2 = '';
    this.isActiveStep2 = '';

    this.isSuccessStep3 = '';
    this.isActiveStep3 = '';

    this.isSuccessStep4 = '';
    this.isActiveStep4 = '';
  }

}

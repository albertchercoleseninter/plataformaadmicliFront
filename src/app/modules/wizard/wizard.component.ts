import { Component, OnInit } from '@angular/core';
import {NavigationEnd, NavigationError, NavigationStart, Router, Event} from '@angular/router';
import {SharedService} from '../../shared/shared.service';


@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {

  constructor(private router: Router, private shared: SharedService) {

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator

      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator

        // Present error to user
        console.log(event.error);
      }
    });
  }
  ngOnInit(): void {
  }


}

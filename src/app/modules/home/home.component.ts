import {Component, OnInit} from '@angular/core';
import {Breadcrumb, PpBreadcrumbsService} from 'pp-breadcrumbs';
import {SharedService} from '../../shared/shared.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private location: Location) {
  }

  ngOnInit(): void {
  }

  backPress(){
    this.location.back();
  }
  nextPress(){
    this.location.forward();
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {
  isModalActive = false;

  constructor() { }

  ngOnInit(): void {
  }
  toggleModal() {
    this.isModalActive = !this.isModalActive;
  }
}

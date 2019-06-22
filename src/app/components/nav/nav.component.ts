import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  logoUrl: string;

  constructor() {
    this.logoUrl = '../assets/img/logo/logo1-01.jpg';
  }

  ngOnInit() {
  }

}

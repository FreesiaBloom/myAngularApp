import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

  currentNewsId: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentNewsId = this.route.snapshot.paramMap.get('id');
  }

}

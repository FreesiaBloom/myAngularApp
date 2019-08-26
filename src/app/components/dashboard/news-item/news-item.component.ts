import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INews } from 'src/app/interfaces/INews';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

  private newsId: string;
  private news: INews;
  showNewsForm: boolean

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: '74'
    })
  };

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.showNewsForm = false;
    this.newsId = this.route.snapshot.paramMap.get('id');
    this.http.get('http://project.usagi.pl/news/' + this.newsId,
    this.httpOptions).toPromise().then((response: INews) => {
      this.news = response;
    });
  }

  saveNews(event) {
    this.http.post('http://project.usagi.pl/news/' + this.newsId, event, this.httpOptions).toPromise().then((response: INews) => {
      this.news = response;
      this.showNewsForm = false;
    });
  }
}

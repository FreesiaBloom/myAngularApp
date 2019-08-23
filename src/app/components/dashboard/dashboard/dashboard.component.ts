import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { News } from '../../../constants/news.constant';
import { INews } from 'src/app/interfaces/INews';
import { log } from 'util';
import { removeSummaryDuplicates } from '@angular/compiler';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  showNewsForm: boolean;
  news: INews[];
  correctNews: INews[];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: '74'
    })
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.showNewsForm = false;
    this.news = [];
    this.correctNews = [];
    this.http.get('http://project.usagi.pl/news',
      this.httpOptions).toPromise().then((response: INews[]) => {
        this.news = response;
        for (let i=0; i<this.news.length; i++) {
          if (this.news[i] !== null) {
           this.correctNews.push(this.news[i]);
          }
        }
      });
  }

  klik() {
    console.log(this.news);
  }

  saveNews(event) {
    this.http.post('http://project.usagi.pl/news', event, this.httpOptions).toPromise().then((response: any) => {
      this.news.push(response);
      this.showNewsForm = false;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { INews } from 'src/app/interfaces/INews';
import { log } from 'util';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  showNewsForm: boolean;
  showNewsDetails: boolean;
  news: INews[];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: '74'
    })
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.showNewsForm = false;
    this.showNewsDetails = false;
    this.http.get('http://project.usagi.pl/news',
      this.httpOptions).toPromise().then((response: INews[]) => {
        this.news = response;
      });
  }

  saveNews(event) {
    this.http.post('http://project.usagi.pl/news', event, this.httpOptions).toPromise().then((response: any) => {
      this.news.push(response);
      this.showNewsForm = false;
    });
  }
}

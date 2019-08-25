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
  private news: INews[];
  private correctNews: INews[];
  numberOfPages: any;
  limit: number;
  currentPage: number;
  start: number;
  end: number;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: '74'
    })
  };

  constructor(private http: HttpClient) {
    this.http.get('http://project.usagi.pl/news',
      this.httpOptions).toPromise().then((response: INews[]) => {
        this.news = response;
        for (let i=0; i<this.news.length; i++) {
          if (this.news[i] !== null) {
           this.correctNews.push(this.news[i]);
          }
        }
        this.numberOfPages = Array(Math.ceil(this.correctNews.length / this.limit)).fill(1);
      });
   }

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
        this.numberOfPages = Array(Math.ceil(this.correctNews.length / this.limit)).fill(1);
      });
    this.currentPage = parseInt(localStorage.getItem('galleryPage')) || 0;
    this.setCurrentPage(this.currentPage);
  }

  removeNews(newsId) {
    const index = this.news.findIndex((newsNew: INews) => newsNew.newsId === newsId);
    this.http.post('http://project.usagi.pl/gallery/delete/' + newsId, this.news, this.httpOptions).toPromise().then((response) => {
      this.news.splice(index, 1);
      this.numberOfPages = Array(Math.ceil(this.correctNews.length / this.limit)).fill(1);
      console.log('success', response);
    }, (errResponse) => {
      console.log('error', errResponse);
    });
  }

  saveNews(event) {
    this.http.post('http://project.usagi.pl/news', event, this.httpOptions).toPromise().then((response: any) => {
      this.news.push(response);
      this.showNewsForm = false;
    });
  }

  setCurrentPage(page = 0) {
    this.limit = 3;
    this.currentPage = page;
    this.start = this.currentPage * this.limit;
    this.end = this.start + 3;

    localStorage.setItem('galleryPage', this.currentPage.toString());
  }

  prevPage() {
    if (this.currentPage !== 0) {
      this.currentPage = this.currentPage - 1;
      this.setCurrentPage(this.currentPage);
    }
  }

  nextPage() {
    if (this.currentPage <= this.numberOfPages.length - 2) {
      this.currentPage = this.currentPage + 1;
      this.setCurrentPage(this.currentPage);
    }
  }

}

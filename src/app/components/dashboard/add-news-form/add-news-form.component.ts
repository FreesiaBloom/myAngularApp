import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { INews } from 'src/app/interfaces/INews';
import * as uuid from 'uuid/v4';
import { Logs } from 'selenium-webdriver';

@Component({
  selector: 'app-add-news-form',
  templateUrl: './add-news-form.component.html',
  styleUrls: ['./add-news-form.component.scss']
})
export class AddNewsFormComponent implements OnInit {

  @Output() saveNews: EventEmitter<INews> = new EventEmitter<INews>();
  news: INews;

  constructor() { }

  ngOnInit() {
    this.news = (this.news && this.news.newsId) ? this.news : this.setEmptyNews();
  }

  setEmptyNews() {
    const newDate = new Date();
    return {
      newsId: '',
      title: '',
      contentShort: '',
      contentFull: '',
      dateCreated: newDate
    };
  }

  onSubmit() {
    this.saveNews.emit(this.news);
  }

}

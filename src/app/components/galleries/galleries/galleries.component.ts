import { Component, OnInit } from '@angular/core';
import { IGallery } from '../../../interfaces/IGallery';
import { Galleries } from '../../../constants/galleries.constant';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.scss']
})

export class GalleriesComponent implements OnInit {
  title: string;
  description: string;
  galleries: IGallery[];
  searchValue: string;
  selectedValue: string;
  limit: number;
  currentPage: number;
  start: number;
  end: number;
  numberOfPages: any;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': '74'
    })
  };

  constructor(private http: HttpClient) {
    this.title = 'Moje skromne portfolio';
    this.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel orci eleifend, egestas massa ut, accumsan dui. Duis vel orci at neque accumsan porttitor.';
    this.galleries = Galleries;
    this.searchValue = '';
    this.selectedValue = '';

    this.galleries = [];
    this.http.get('http://project.usagi.pl/gallery',
      this.httpOptions).toPromise().then((response: IGallery[]) => {
        console.log(response);
        this.galleries = response;
        this.numberOfPages = Array(Math.ceil(this.galleries.length / this.limit)).fill(1);
      });


    this.http.get('http://project.usagi.pl/gallery', this.httpOptions).toPromise().then((response: IGallery[]) => {
      console.log(response);
      this.galleries = response;
      this.numberOfPages = Array(Math.ceil(this.galleries.length / this.limit)).fill(1);
    });
  }

  setSearchValue($event) {
    this.searchValue = $event;
  }

  setSelectValue($event) {
    this.selectedValue = $event;
  }

  exportGalleries() {
    Galleries.forEach((gallery: IGallery) => {
      delete (gallery.galleryId);
      this.http.post('http://project.usagi.pl/gallery', gallery, this.httpOptions).toPromise().then((response: IGallery) => {
        console.log('success', response);
        this.galleries.push(response);
        this.numberOfPages = Array(Math.ceil(this.galleries.length / this.limit)).fill(1);
      }, (errResponse) => {
        console.log('error', errResponse);
      });
    });
  }

  removeGalleries() {
    this.galleries.forEach((gallery: IGallery) => {
      this.http.post('http://project.usagi.pl/gallery/delete/' + gallery.galleryId, {}, this.httpOptions).toPromise().then((response) => {
        this.galleries.splice(0, 1);
        this.numberOfPages = Array(Math.ceil(this.galleries.length / this.limit)).fill(1);
        console.log('success', response);
      }, (errResponse) => {
        console.log('error', errResponse);
      });
    });
  }

  removeGallery(galleryId) {
    const index = this.galleries.findIndex((gallery: IGallery) => gallery.galleryId === galleryId);
    this.http.post('http://project.usagi.pl/gallery/delete/' + galleryId, {}, this.httpOptions).toPromise().then((response) => {
      this.galleries.splice(index, 1);
      this.numberOfPages = Array(Math.ceil(this.galleries.length / this.limit)).fill(1);
      console.log('success', response);
    }, (errResponse) => {
      console.log('error', errResponse);
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
    if (this.currentPage <= this.numberOfPages.length-2) {
      this.currentPage = this.currentPage + 1;
      this.setCurrentPage(this.currentPage);
    }
  }

  ngOnInit() {
    this.setCurrentPage();

    //this.galleries = [];
    this.http.get('http://project.usagi.pl/gallery',
      this.httpOptions).toPromise().then((response: IGallery[]) => {
        this.galleries = response;
        this.numberOfPages = Array(Math.ceil(this.galleries.length / this.limit)).fill(1);
      });

    this.currentPage = parseInt(localStorage.getItem('galleryPage')) || 0;
    this.setCurrentPage(this.currentPage);
  }

}
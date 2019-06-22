import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGallery } from 'src/app/interfaces/IGallery';
import { Galleries } from 'src/app/constants/galleries.constant';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IComment } from 'src/app/interfaces/IComments';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  private galleryId: string;
  gallery: IGallery;
  showGalleryForm: boolean;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: '74'
    })
  };

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.showGalleryForm = false;
    this.galleryId = this.route.snapshot.paramMap.get('galleryId');
    this.http.get('http://project.usagi.pl/gallery/' + this.galleryId,
      this.httpOptions).toPromise().then((response: IGallery) => {
        this.gallery = response;
      });
  }

  saveGallery(event) {
    this.http.post('http://project.usagi.pl/gallery/' + this.galleryId, event, this.httpOptions).toPromise().then((response: IGallery) => {
      this.gallery = response;
      this.showGalleryForm = false;
    });
  }

}

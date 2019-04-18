import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGallery } from 'src/app/interfaces/IGallery';
import { Galleries } from 'src/app/constants/galleries.constant';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  private galleryId: string;
  gallery: IGallery;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': '74'
    })
  };

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    
   }

  ngOnInit() {
    this.galleryId = this.route.snapshot.paramMap.get('galleryId');
    /*let foundGalleries = Galleries.find((item) => item.galleryId === this.galleryId);
      this.gallery = foundGalleries;*/
      this.http.get('http://project.usagi.pl/gallery/' + this.galleryId,
      this.httpOptions).toPromise().then((response: IGallery) => {
        console.log(response);
        this.gallery = response;
      });
    }


  }
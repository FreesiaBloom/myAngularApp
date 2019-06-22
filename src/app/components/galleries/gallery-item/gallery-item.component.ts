import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IGallery } from 'src/app/interfaces/IGallery';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent implements OnInit {

  @Input() gallery: IGallery;
  // tslint:disable-next-line:ban-types
  @Output() deleteGallery: EventEmitter<String> = new EventEmitter<String>();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: '74'
    })
  };

  constructor() { }

  ngOnInit() {
  }

  onDelete(galleryId) {
    this.deleteGallery.emit(galleryId);
  }
}

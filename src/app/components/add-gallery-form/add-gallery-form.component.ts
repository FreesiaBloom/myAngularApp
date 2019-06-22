import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IGallery } from 'src/app/interfaces/IGallery';
import * as uuid from 'uuid/v4';

@Component({
  selector: 'app-add-gallery-form',
  templateUrl: './add-gallery-form.component.html',
  styleUrls: ['./add-gallery-form.component.scss']
})
export class AddGalleryFormComponent implements OnInit {

  @Output() saveGallery: EventEmitter<IGallery> = new EventEmitter<IGallery>();
  @Input() gallery?: IGallery;

  constructor() { }

  ngOnInit() {
    this.gallery = (this.gallery && this.gallery.galleryId) ? this.gallery : this.setEmptyGallery();
  }

  setEmptyGallery() {
    return {
      galleryId: '',
      title: '',
      thumbUrl: '',
      dateCreated: '',
      description: '',
      tags: [],
      photos: [{ photoId: uuid(), thumbUrl: '', imgUrl: '' }]
    };
  }

  setEmptyPhoto() {
    return {
      photoId: uuid(),
      thumbUrl: '',
      imgUrl: ''
    };
  }

  addPhoto() {
    this.gallery.photos.push(this.setEmptyPhoto());
  }

  removePhoto(index) {
    if (this.gallery.photos.length > 0) {
      this.gallery.photos.splice(index, 1);
    }
  }

  onSubmit() {
    this.saveGallery.emit(this.gallery);
  }
}

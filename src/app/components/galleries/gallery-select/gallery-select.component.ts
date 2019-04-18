import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IGallery } from '../../../interfaces/IGallery';
import { Galleries } from '../../../constants/galleries.constant';

@Component({
  selector: 'app-gallery-select',
  templateUrl: './gallery-select.component.html',
  styleUrls: ['./gallery-select.component.scss']
})
export class GallerySelectComponent implements OnInit {

  @Output()
  selectValue: EventEmitter<String> = new EventEmitter<String>();
  
  value: string;
  galleries: IGallery[];

  constructor() {
    this.galleries = Galleries;
   }

  ngOnInit() {
    this.value = '';
  }

  onChange() {
    this.selectValue.emit(this.value);
  }

}

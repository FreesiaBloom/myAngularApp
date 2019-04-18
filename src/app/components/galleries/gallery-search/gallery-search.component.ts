import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gallery-search',
  templateUrl: './gallery-search.component.html',
  styleUrls: ['./gallery-search.component.scss']
})
export class GallerySearchComponent implements OnInit {
  
  @Output()
  searchValue: EventEmitter<String> = new EventEmitter<String>();
  
  value: string;
  
  constructor() { }

  ngOnInit() {
    this.value = '';
  }

  onChange() {
    this.searchValue.emit(this.value);
  }

}

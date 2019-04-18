import { Pipe, PipeTransform } from '@angular/core';
import { IGallery } from '../interfaces/IGallery';

@Pipe({
  name: 'searchGalleries'
})
export class SearchGalleriesPipe implements PipeTransform {

  galleries: any;

  transform(value: any, args?: any): any {
    this.galleries = value;

    if (args) {
      this.galleries = this.galleries.filter( (gallery: IGallery) => (
        (gallery.title.toLowerCase().indexOf(args) !== -1) || (gallery.description.toLowerCase().indexOf(args) !== -1)));
    } else {
      this.galleries = value;
    }
    
    return this.galleries;
  }

}

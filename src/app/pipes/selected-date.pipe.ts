import { Pipe, PipeTransform } from '@angular/core';
import { IGallery } from '../interfaces/IGallery';

@Pipe({
  name: 'selectedDate'
})
export class SelectedDatePipe implements PipeTransform {

  returnedGalleries: IGallery[];

  transform(galleries: IGallery[], selectedValue:string): IGallery[] {

    if (selectedValue) {
      return galleries.filter( (gallery: IGallery) => (
        (gallery.dateCreated.indexOf(selectedValue) !== -1)));
    } else {
      return galleries;
    }

  }
}

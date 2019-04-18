import { Pipe, PipeTransform } from '@angular/core';

const MONTHS = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj',
'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik',
'listopad', 'grudzień'];

@Pipe({
  name: 'polishDate'
})
export class PolishDatePipe implements PipeTransform {

  date: Date;
  monthNumber: number;
  month: string;

  transform(value: any, args?: any): any {
    this.date = new Date(value);
    this.monthNumber = this.date.getMonth();
    this.month = MONTHS[this.monthNumber];

    return this.date.getDate() + ' ' + this.month + ' ' + this.date.getFullYear();
  }

}

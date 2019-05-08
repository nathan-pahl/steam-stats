import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(minutes: number, args?: any): string {
    let hour = Math.floor(minutes / 60);
    let minute = Math.round(minutes % 60);
    return hour + "h " + minute + "m";
  }

}

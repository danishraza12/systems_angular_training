import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFilter'
})
export class DateFilterPipe implements PipeTransform {

  transform(values: any[], ...args: unknown[]): any {
    return values.sort((a,b) => a - b);
  }

}

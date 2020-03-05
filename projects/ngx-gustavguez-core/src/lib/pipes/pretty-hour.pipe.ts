import { Pipe, PipeTransform } from '@angular/core';
import { DateUtility } from 'ngx-gustavguez-core';

@Pipe({
  name: 'prettyHour'
})
export class PrettyHourPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return DateUtility.prettyHour(value);
  }

}

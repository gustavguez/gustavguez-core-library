import { Pipe, PipeTransform } from '@angular/core';
import { NumberUtility } from 'ngx-gustavguez-core';

@Pipe({
  name: 'prettyNumber'
})
export class PrettyNumberPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value ? NumberUtility.format(value): '';
  }

}

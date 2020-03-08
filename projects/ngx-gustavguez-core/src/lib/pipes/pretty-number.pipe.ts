import { Pipe, PipeTransform } from '@angular/core';
import { NumberUtility } from '../utilities/number.utility';

@Pipe({
  name: 'prettyNumber'
})
export class PrettyNumberPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value != undefined ? NumberUtility.format(value): '';
  }

}

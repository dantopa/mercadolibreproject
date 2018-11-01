import {DecimalPipe} from '@angular/common';
import {Pipe} from '@angular/core';

@Pipe({
  name: 'pointReplacer'
})
export class PointReplacerPipe extends DecimalPipe {

  transform(value: any, digits?: string): string {
    return super.transform(value, digits).replace(',', '.');


  }
}

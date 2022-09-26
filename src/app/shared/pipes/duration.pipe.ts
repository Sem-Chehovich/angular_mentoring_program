import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {

  transform(value: number | undefined): string {
    if (typeof value === 'number') {
      switch (true) {
        case (value < 60):
          return `${value} min`;
  
        case (value === 60):
          return `${(value / 60)} h`;
      }
  
      return `${Math.floor(value / 60)} h ${Math.floor(value % 60)} min`;
    }
    return 'time is set incorrectly'

  }

}

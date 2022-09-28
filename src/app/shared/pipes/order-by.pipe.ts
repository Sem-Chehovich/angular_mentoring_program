import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/courses/models/courses.model';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  
    transform(arr: Course[]): Course[] {
      const copy = [...arr];
      return copy.sort((a, b) => b.creationDate.getTime() - a.creationDate.getTime());
    }
}

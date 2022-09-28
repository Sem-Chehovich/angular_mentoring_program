import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/courses/models/courses.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(arr: Course[], message: string): Course[] {
    const transformedCondition = message?.toLowerCase();
    return arr.filter(course => course.title.toLowerCase().includes(transformedCondition));
  }

}

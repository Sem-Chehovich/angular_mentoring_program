import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges, } from '@angular/core';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { Course } from '../../models/courses.model';
import { CoursesService } from '../../services/courses.service';


@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit, OnChanges {
  @Input() query: string;

  searchedCourses: Course[];
  isDataEmpty: boolean

  constructor(private filterPipe: FilterPipe, private coursesService: CoursesService) {}

  ngOnChanges(changes: SimpleChanges) {
    const { currentValue, previousValue, firstChange } = changes['query'];

    if (!firstChange && currentValue !== previousValue) {
      this.onSearchCourse(this.query);
    }
  }

  get courses() {
    return this.coursesService.getCourses();
  }

  get filteredCourses() {
    return this.searchedCourses ? this.searchedCourses : this.courses;
  }

  ngOnInit(): void {
  }


  trackByFn(index: number, course: Course) {
    return index;
  }

  onEditCourse(courseId: number) {
    console.log(`Edit Course with Id: ${courseId}`);

  }

  onDeleteCourse(course: Course): void {
    this.coursesService.removeCourse(course);
  }
  
  onSearchCourse(query: string): void {
    this.searchedCourses = this.filterPipe.transform(this.courses, query);
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../models/courses.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent implements OnInit {
  @Input() course?: Course;

  @Output() editCourse = new EventEmitter<number>();

  @Output() deleteCourse = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}

  onCourseEdit() {
    this.editCourse.emit(this.course?.id);
  }

  onCourseDelete() {
    this.deleteCourse.emit(this.course?.id);
  }
}

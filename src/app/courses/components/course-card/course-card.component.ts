import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../models/courses.model';
import * as moment from 'moment';

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
  public getBorderColor(): string {
    const datePublication: moment.Moment = moment(this.course?.creationDate);
    const currentDate: moment.Moment = moment();
    const days: number = currentDate.diff(datePublication, 'days');
    const month: number = currentDate.diff(datePublication, 'months');
    if (days <= 14) {
      return 'green';
    }
    return 'blue';
  }
}

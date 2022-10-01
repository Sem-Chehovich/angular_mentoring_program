import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../models/courses.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalWindowComponent } from '../modal-window/modal-window.component';
import { CoursesService } from '../../services/courses.service';


@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent implements OnInit {
  @Input() course?: Course;

  @Output() editCourse = new EventEmitter<number>();

  @Output() deleteCourse = new EventEmitter<number>();

  constructor(public dialog: MatDialog, private coursesService: CoursesService) {}

  ngOnInit() {}

  onCourseEdit() {
    this.editCourse.emit(this.course?.id);
  }

  onCourseDelete() {
    const dialogRef = this.dialog.open(ModalWindowComponent);
    this.coursesService.course = this.course
    // this.deleteCourse.emit(this.course?.id);
  }

  // openDialog() {
  //   const dialogRef = this.dialog.open(DialogContentExampleDialog);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

}

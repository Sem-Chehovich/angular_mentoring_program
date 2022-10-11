import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../models/courses.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalWindowComponent } from '../../../core/components/modal-window/modal-window.component';
import { CoursesService } from '../../services/courses.service';


@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    this.coursesService.course = this.course
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
      title: 'Delete course?',
      contentItem: 'Are you sure you want to delete',
      content: `Video Course ${this.course?.title} ?`,
      buttonClose: 'Cancel',
      buttonConfirm: 'Yes, delete',
    };

    const dialogRef = this.dialog.open(ModalWindowComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data) {
          this.coursesService.removeCourse(this.coursesService.course)
        }
      }
    );   
  }
}

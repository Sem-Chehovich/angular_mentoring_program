import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Course } from '../../models/courses.model';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {
  
  @Output() cancel = new EventEmitter<void>();
  course: Course | undefined;

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.course = this.coursesService.course
  }

  delete () {
    this.coursesService.removeCourse(this.coursesService.course)
  }

}

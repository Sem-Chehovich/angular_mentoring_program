import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/courses.model';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
})
export class CoursesPageComponent implements OnInit {
  courses: Course[];

  constructor() { }

  ngOnInit() {
  }

  loadMore() {
    console.log('Button clicked view more');
  }
}

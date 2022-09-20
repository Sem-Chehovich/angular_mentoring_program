import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/courses.model';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
})
export class CoursesPageComponent implements OnInit {
  courses?: Course[];

  constructor() { }

  ngOnInit() {
    this.courses = [
      {
        id: 1,
        title: 'Video Course 1. Name tag',
        description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or colleges classes. Theyre published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
        duration: 88,
        creationDate: new Date(),
      },
      {
        id: 2,
        title: 'Video Course 2. Name tag',
        description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or colleges classes. Theyre published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
        duration: 60,
        creationDate: new Date(),
      },
      {
        id: 3,
        title: 'Video Course 3. Name tag',
        description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or colleges classes. Theyre published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
        duration: 48,
        creationDate: new Date(),
      },
    ];
  }

  onEditCourse(courseId: number) {
    console.log(`Edit Course with Id: ${courseId}`);
  }

  onDeleteCourse(courseId: number) {
    console.log(`Delete Course with Id: ${courseId}`);
  }

  loadMore() {
    console.log('Button clicked view more');
  }
}

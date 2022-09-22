/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/courses.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  courses: Course[];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        title: 'Video Course 1. Name tag',
        description:
          'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or colleges classes. Theyre published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
        duration: 88,
        creationDate: new Date(),
      },
      {
        id: 2,
        title: 'Video Course 2. Name tag',
        description:
          'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or colleges classes. Theyre published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
        duration: 60,
        creationDate: new Date(),
      },
      {
        id: 3,
        title: 'Video Course 3. Name tag',
        description:
          'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or colleges classes. Theyre published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
        duration: 48,
        creationDate: new Date(),
      },
    ];
  }

  trackByFn(index: number, course: Course) {
    return index;
  }

  onEditCourse(courseId: number) {
    console.log(`Edit Course with Id: ${courseId}`);
  }

  onDeleteCourse(courseId: number) {
    console.log(`Delete Course with Id: ${courseId}`);
  }
}

import { Injectable } from '@angular/core';
import { Course } from '../models/courses.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  course: Course | undefined;

  courses: Course[] = [
    {
      id: 1,
      title: 'Video Course 1. Name tag',
      description:
        'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or colleges classes. Theyre published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
      duration: 88,
      creationDate: new Date(2022, 11, 24),
      topRated: true
    },
    {
      id: 2,
      title: 'Video Course 2. Name tag',
      description:
        'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or colleges classes. Theyre published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
      duration: 60,
      creationDate: new Date(2022, 7, 24,),
      topRated: false
    },
    {
      id: 3,
      title: 'Video Course 3. Name tag',
      description:
        'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or colleges classes. Theyre published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
      duration: 48,
      creationDate: new Date(),
      topRated: true
    },
  ];

  constructor() { }

  getCourses(): Course[] {
    return this.courses;
  }

  createCourse(course: Course): void {
    this.courses.push(course);
  }

  getCourse(id: number): Course | undefined {
    return this.courses.find(course => course.id === id);
  }

  updateCourse(course: Course): Course[] {
    return [...this.courses, course];
  }

  removeCourse(course: Course | undefined): void {
    this.courses = this.courses.filter(item => item !== course);
  }
}

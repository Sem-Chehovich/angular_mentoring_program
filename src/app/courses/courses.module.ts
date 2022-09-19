import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { NewCoursPageComponent } from './pages/new-course-page/new-course-page.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { SearchCourseComponent } from './components/search-course/search-course.component';


@NgModule({
  declarations: [
    CoursesPageComponent,
    NewCoursPageComponent,
    CourseCardComponent,
    ModalWindowComponent,
    SearchCourseComponent,
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
  ],
})
export class CoursesModule { }

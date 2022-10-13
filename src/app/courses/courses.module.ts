import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { NewCoursPageComponent } from './pages/new-course-page/new-course-page.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { ModalWindowComponent } from '../core/components/modal-window/modal-window.component';
import { SearchCourseComponent } from './components/search-course/search-course.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { MatCardModule } from '@angular/material/card';
import { FilterPipe } from '../shared/pipes/filter.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { DurationInputComponent } from './components/duration-input/duration-input.component';
import { AuthorsInputComponent } from './components/authors-input/authors-input.component';
import { DateInputComponent } from './components/date-input/date-input.component';

@NgModule({
  declarations: [
    CoursesPageComponent,
    NewCoursPageComponent,
    CourseCardComponent,
    ModalWindowComponent,
    SearchCourseComponent,
    CoursesListComponent,
    DurationInputComponent,
    AuthorsInputComponent,
    DateInputComponent,
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatIconModule,
    FormsModule,
    SharedModule,
    MatCardModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    FilterPipe,
  ],
})
export class CoursesModule { }

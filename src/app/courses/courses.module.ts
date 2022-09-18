import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { NewCoursPageComponent } from './pages/new-cours-page/new-cours-page.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { DeleteCoursModalComponent } from './components/delete-cours-modal/delete-cours-modal.component';


@NgModule({
  declarations: [
    CoursesPageComponent,
    NewCoursPageComponent,
    CourseCardComponent,
    DeleteCoursModalComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }

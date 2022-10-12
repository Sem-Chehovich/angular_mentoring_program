import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { NewCoursPageComponent } from './pages/new-course-page/new-course-page.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesPageComponent,
  },
  {
    path: 'new',
    component: NewCoursPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule { }

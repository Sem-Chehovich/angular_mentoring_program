import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { NotFoundComponent } from './courses/pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'courses',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./courses/courses.module').then(m => m.CoursesModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then(m => m.AuthModule),
  },
  { 
    path: '', redirectTo: 'courses', pathMatch: 'full' 
  },
  { 
    path: '**', component: NotFoundComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

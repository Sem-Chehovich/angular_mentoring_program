import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Course } from '../../models/courses.model';
import { CoursesService } from '../../services/courses.service';


@Component({
  selector: 'app-new-course-page',
  templateUrl: './new-course-page.component.html',
  styleUrls: ['./new-course-page.component.scss'],
})
export class NewCoursPageComponent implements OnInit, OnDestroy {

  formNewCourse!: FormGroup;
  course: Course;
  private sub: Subscription

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coursesService: CoursesService,
     ) {}

  title: string = 'New course';

  ngOnInit(): void {
    this.buildForm();
    this.sub = this.route.params.subscribe(
      (params: Params) => {
        if (params['id']){
          this.title = 'Edit course'
          this.course = this.coursesService.getCourse(+params['id']);
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onFormSubmit(): void {
    this.router.navigate(['/courses']);
    if(this.title === 'Edit course') {
      this.coursesService.updateCourse(this.course);
    } else {
      this.coursesService.createCourse(this.course);
    }
  }

  cancel(): void {
    this.router.navigate(['/courses']);
  }

  
  private buildForm(): void {
    this.formNewCourse = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      duration: new FormControl('', [Validators.required]),
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-course-page',
  templateUrl: './new-course-page.component.html',
  styleUrls: ['./new-course-page.component.scss'],
})
export class NewCoursPageComponent implements OnInit {

  formNewCourse!: FormGroup;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {

  }

  createCourse(): void {
    this.router.navigate(['/courses/list']);
  }

  cancel(): void {
    this.router.navigate(['/courses/list']);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    this.buildForm();
  }

  onSubmit(): void {

  }

  createCourse(): void {
    this.router.navigate(['/courses']);
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

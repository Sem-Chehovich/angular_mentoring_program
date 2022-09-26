import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DurationPipe } from '../../../shared/pipes/duration.pipe';
import { Course } from '../../models/courses.model';

import { CourseCardComponent } from './course-card.component';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent = new CourseCardComponent();
  let fixture: ComponentFixture<CourseCardComponent>;
  const courseTest: Course = {
    id: 42,
    creationDate: new Date(2022,8,23),
    title: 'title Course name',
    duration: 123,
    description: 'description Course',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseCardComponent, DurationPipe ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('when clicking on the edit button, the ID should be transmitted', () => {
    component.course = courseTest;
    spyOn(component.editCourse, 'emit');
    component.onCourseEdit();
    expect(component.editCourse.emit).toHaveBeenCalledWith(courseTest.id);
  });

  it('when clicking on the delete button, the ID should be transmitted', () => {
    component.course = courseTest;
    spyOn(component.deleteCourse, 'emit');
    component.onCourseDelete();
    expect(component.deleteCourse.emit).toHaveBeenCalledWith(courseTest.id);
  });

  it('should display the name of the course', () => {
    component.course = courseTest;
    fixture.detectChanges();
    const courseElement: HTMLElement = fixture.nativeElement;
    const title = courseElement.querySelector('mat-card-title');
    expect(title?.textContent).toEqual('title Course name');
  });

  it('should display the name of the course description', () => {
    component.course = courseTest;
    fixture.detectChanges();
    const courseDe: DebugElement = fixture.debugElement;
    const courseEl: HTMLElement = courseDe.nativeElement;
    const title = courseEl.querySelector('mat-card-content');
    expect(title?.textContent).toEqual('description Course');
  });

  it('should display the name of the course duration correctly', () => {
    component.course = courseTest;
    fixture.detectChanges();
    const courseDe: DebugElement = fixture.debugElement;
    const timeDe: DebugElement = courseDe.query(By.css('.date'));
    const time: HTMLElement = timeDe.nativeElement;
    expect(time?.textContent).toEqual('9/23/2022');
  });
});


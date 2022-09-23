import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DurationPipe } from '../../../shared/pipes/duration.pipe';
import { Course } from '../../models/courses.model';

import { CourseCardComponent } from './course-card.component';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent = new CourseCardComponent();
  let fixture: ComponentFixture<CourseCardComponent>;
  const course: Course = {
    id: 42,
    creationDate: new Date,
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

  it('is onCourseDelete method exists', () => {
    const spy = spyOn(component, 'onCourseDelete');
    component.onCourseDelete();
    expect(spy).toHaveBeenCalled();
  });

  it('is onCourseEdit method exists', () => {
    const spy = spyOn(component, 'onCourseEdit');
    component.onCourseEdit();
    expect(spy).toHaveBeenCalled();
  });

  it('when clicking on the edit button, the ID should be transmitted', () => {
    component.course = course;
    component.editCourse.subscribe(id => expect(id).toBe(course.id));
    component.onCourseEdit();
  });

  it('when clicking on the delete button, the ID should be transmitted', () => {
    component.course = course;
    component.deleteCourse.subscribe( id  => expect(id).toBe(course.id));
    component.onCourseDelete();
  });






  

  it('should display the name of the course', () => {
    component.course = course;
    fixture.detectChanges();
    const courseElement: HTMLElement = fixture.nativeElement;
    const title = courseElement.querySelector('mat-card-title');
    expect(title?.textContent).toEqual('title Course name');
  });

  it('should display the name of the course description', () => {
    component.course = course;
    fixture.detectChanges();
    const courseDe: DebugElement = fixture.debugElement;
    const courseEl: HTMLElement = courseDe.nativeElement;
    const title = courseEl.querySelector('mat-card-content');
    expect(title?.textContent).toEqual('description Course');
  });

  it('should display the name of the course duration correctly', () => {
    component.course = course;
    fixture.detectChanges();
    const courseDe: DebugElement = fixture.debugElement;
    const timeDe: DebugElement = courseDe.query(By.css('.date'));
    const time: HTMLElement = timeDe.nativeElement;
    expect(time?.textContent).toEqual('9/23/2022');
  });

  it('should give the course input id when the edit button is clicked', () => {
    component.course = course;
    fixture.detectChanges();
    const courseDe: DebugElement = fixture.debugElement;
    const buttonDe: DebugElement = courseDe.query(By.css('.btn-edit'));
    component.editCourse.subscribe(id => expect(id).toBe(course.id));
    buttonDe.triggerEventHandler('click', null);
  });

  it('should generate a mouse event when the "delete" button is clicked', () => {
    component.course = course;
    fixture.detectChanges();
    const courseDe: DebugElement = fixture.debugElement;
    const buttonDe: DebugElement = courseDe.query(By.css('.btn-delete'));
    component.deleteCourse.subscribe(id => expect(id).toBe(course.id));
    buttonDe.triggerEventHandler('click', null);
  });
});


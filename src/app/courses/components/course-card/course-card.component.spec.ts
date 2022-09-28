import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { OrderByPipe } from 'src/app/shared/pipes/order-by.pipe';
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
    topRated: false
  };
  const courseTestOldTime: Course = {
    id: 42,
    creationDate: new Date(2022,7,23),
    title: 'title Course name',
    duration: 123,
    description: 'description Course',
    topRated: false
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseCardComponent, DurationPipe, OrderByPipe ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit course id when the edit button is clicked', () => {
    component.course = courseTest;
    spyOn(component.editCourse, 'emit');
    component.onCourseEdit();
    expect(component.editCourse.emit).toHaveBeenCalledWith(courseTest.id);
  });

  it('should emit course id when the delete button is clicked', () => {
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
    expect(title?.textContent).toEqual('TITLE COURSE NAME');
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

  it('should getBorderColor metod with fresh date work correct', () => {
    component.course = courseTest;
    let res =  component.getBorderColor()
    expect(res).toEqual('green')
  });

  it('should getBorderColor metod with old date work correct', () => {
    component.course = courseTestOldTime;
    let res =  component.getBorderColor()
    expect(res).toEqual('blue')
  });
});


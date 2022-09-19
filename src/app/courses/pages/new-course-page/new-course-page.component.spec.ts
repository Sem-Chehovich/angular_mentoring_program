import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCoursPageComponent } from './new-course-page.component';

describe('NewCoursPageComponent', () => {
  let component: NewCoursPageComponent;
  let fixture: ComponentFixture<NewCoursPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCoursPageComponent ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(NewCoursPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

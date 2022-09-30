import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPageComponent } from './courses-page.component';

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent = new CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;
  console.log = jasmine.createSpy('log');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesPageComponent ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('load more method should show correct result', () => {
    component.loadMore();
    expect(console.log).toHaveBeenCalledWith('Button clicked view more');
  });

  it('should onSearchCourse metod work correct', () => {
    component.onSearchCourse('test');
    expect(component.query).toEqual('test');
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { OrderByPipe } from 'src/app/shared/pipes/order-by.pipe';

import { CoursesListComponent } from './courses-list.component';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;
  console.log = jasmine.createSpy('log');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesListComponent, OrderByPipe],
      providers: [ FilterPipe ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('the method "onEditCourse" should show the correct result', () => {
      component.onEditCourse(11);
      expect(console.log).toHaveBeenCalledWith('Edit Course with Id: 11');
    });

    it('the method "onDeleteCourse" should show the correct result', () => {
      component.onDeleteCourse(11);
      expect(console.log).toHaveBeenCalledWith('Delete Course with Id: 11');
    });
});

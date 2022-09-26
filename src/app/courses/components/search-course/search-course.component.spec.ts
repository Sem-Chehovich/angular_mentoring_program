import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';


import { SearchCourseComponent } from './search-course.component';

describe('SearchCourseComponent', () => {
  let component: SearchCourseComponent = new SearchCourseComponent;
  let fixture: ComponentFixture<SearchCourseComponent>;
  console.log = jasmine.createSpy('log');
  let buttonEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should output to console on search click', () => {
    component.searchText = 'test test';
    fixture.detectChanges();
    component.search();
    expect(console.log).toHaveBeenCalledWith('You searched for this word: test test');
  });

  it('should output to console on search button click', () => {
    component.searchText = 'test test';
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    const button = el.querySelector('button');
    button?.click();
    expect(console.log).toHaveBeenCalledWith('You searched for this word: test test');
  });

  it('search method should be called', () => {
    spyOn(component, 'search');
    buttonEl = fixture.debugElement.query(By.css('.btn'));
    fixture.detectChanges();
    buttonEl.triggerEventHandler('click');
    expect(component.search).toHaveBeenCalled();
  });

});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCorseDateComponent } from './new-corse-date.component';

describe('NewCorseDateComponent', () => {
  let component: NewCorseDateComponent;
  let fixture: ComponentFixture<NewCorseDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCorseDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCorseDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

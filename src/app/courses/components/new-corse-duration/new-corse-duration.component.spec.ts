import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCorseDurationComponent } from './new-corse-duration.component';

describe('NewCorseDurationComponent', () => {
  let component: NewCorseDurationComponent;
  let fixture: ComponentFixture<NewCorseDurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCorseDurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCorseDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

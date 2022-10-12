import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCorseAuthorsComponent } from './new-corse-authors.component';

describe('NewCorseAuthorsComponent', () => {
  let component: NewCorseAuthorsComponent;
  let fixture: ComponentFixture<NewCorseAuthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCorseAuthorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCorseAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

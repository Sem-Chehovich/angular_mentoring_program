import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsInputComponent } from './authors-input.component';

describe('NewCorseAuthorsComponent', () => {
  let component: AuthorsInputComponent;
  let fixture: ComponentFixture<AuthorsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorsInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCoursModalComponent } from './delete-cours-modal.component';

describe('DeleteCoursModalComponent', () => {
  let component: DeleteCoursModalComponent;
  let fixture: ComponentFixture<DeleteCoursModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCoursModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCoursModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

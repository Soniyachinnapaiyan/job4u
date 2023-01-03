import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoUserDialogComponent } from './no-user-dialog.component';

describe('NoUserDialogComponent', () => {
  let component: NoUserDialogComponent;
  let fixture: ComponentFixture<NoUserDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoUserDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

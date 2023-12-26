import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionRecordModalComponent } from './opinion-record-modal.component';

describe('OpinionRecordModalComponent', () => {
  let component: OpinionRecordModalComponent;
  let fixture: ComponentFixture<OpinionRecordModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpinionRecordModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpinionRecordModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

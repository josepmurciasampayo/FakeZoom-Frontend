import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdRollarComponent } from './ld-rollar.component';

describe('LdRollarComponent', () => {
  let component: LdRollarComponent;
  let fixture: ComponentFixture<LdRollarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LdRollarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LdRollarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

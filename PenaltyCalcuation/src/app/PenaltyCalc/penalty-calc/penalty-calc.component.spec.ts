import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenaltyCalcComponent } from './penalty-calc.component';

describe('PenaltyCalcComponent', () => {
  let component: PenaltyCalcComponent;
  let fixture: ComponentFixture<PenaltyCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenaltyCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenaltyCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

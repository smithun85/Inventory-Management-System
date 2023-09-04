import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjustmentComponent } from './adjustment.component';

describe('AdjustmentComponent', () => {
  let component: AdjustmentComponent;
  let fixture: ComponentFixture<AdjustmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdjustmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdjustmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

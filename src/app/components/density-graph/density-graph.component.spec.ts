import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DensityGraphComponent } from './density-graph.component';

describe('DensityGraphComponent', () => {
  let component: DensityGraphComponent;
  let fixture: ComponentFixture<DensityGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DensityGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DensityGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

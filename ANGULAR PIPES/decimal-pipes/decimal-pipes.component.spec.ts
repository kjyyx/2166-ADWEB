import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecimalPipesComponent } from './decimal-pipes.component';

describe('DecimalPipesComponent', () => {
  let component: DecimalPipesComponent;
  let fixture: ComponentFixture<DecimalPipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DecimalPipesComponent]
    });
    fixture = TestBed.createComponent(DecimalPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

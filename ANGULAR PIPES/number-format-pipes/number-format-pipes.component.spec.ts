import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberFormatPipesComponent } from './number-format-pipes.component';

describe('NumberFormatPipesComponent', () => {
  let component: NumberFormatPipesComponent;
  let fixture: ComponentFixture<NumberFormatPipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberFormatPipesComponent]
    });
    fixture = TestBed.createComponent(NumberFormatPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

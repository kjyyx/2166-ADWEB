import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePipesComponent } from './date-pipes.component';

describe('DatePipesComponent', () => {
  let component: DatePipesComponent;
  let fixture: ComponentFixture<DatePipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatePipesComponent]
    });
    fixture = TestBed.createComponent(DatePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

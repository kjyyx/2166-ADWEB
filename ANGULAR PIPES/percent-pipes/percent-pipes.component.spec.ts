import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentPipesComponent } from './percent-pipes.component';

describe('PercentPipesComponent', () => {
  let component: PercentPipesComponent;
  let fixture: ComponentFixture<PercentPipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PercentPipesComponent]
    });
    fixture = TestBed.createComponent(PercentPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

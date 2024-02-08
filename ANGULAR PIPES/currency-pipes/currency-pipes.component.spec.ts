import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyPipesComponent } from './currency-pipes.component';

describe('CurrencyPipesComponent', () => {
  let component: CurrencyPipesComponent;
  let fixture: ComponentFixture<CurrencyPipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyPipesComponent]
    });
    fixture = TestBed.createComponent(CurrencyPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

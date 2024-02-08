import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFormatPipesComponent } from './text-format-pipes.component';

describe('TextFormatPipesComponent', () => {
  let component: TextFormatPipesComponent;
  let fixture: ComponentFixture<TextFormatPipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextFormatPipesComponent]
    });
    fixture = TestBed.createComponent(TextFormatPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

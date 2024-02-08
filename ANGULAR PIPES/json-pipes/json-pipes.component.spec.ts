import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonPipesComponent } from './json-pipes.component';

describe('JsonPipesComponent', () => {
  let component: JsonPipesComponent;
  let fixture: ComponentFixture<JsonPipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsonPipesComponent]
    });
    fixture = TestBed.createComponent(JsonPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

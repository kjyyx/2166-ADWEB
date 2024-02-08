import { Component } from '@angular/core';

@Component({
  selector: 'app-decimal-pipes',
  templateUrl: './decimal-pipes.component.html',
  styleUrls: ['./decimal-pipes.component.css']
})
export class DecimalPipesComponent {
  // Example decimal numbers
  number1: number = 1234.567;
  number2: number = 8901.234;
  number3: number = 567.89123;
}

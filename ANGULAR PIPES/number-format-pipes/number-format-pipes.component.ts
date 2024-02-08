import { Component } from '@angular/core';

@Component({
  selector: 'app-number-format-pipes',
  templateUrl: './number-format-pipes.component.html',
  styleUrls: ['./number-format-pipes.component.css']
})
export class NumberFormatPipesComponent {
  number1: number = 123456.789;
  number2: number = 987654.321;
  number3: number = 0.12345;
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-slice-pipes',
  templateUrl: './slice-pipes.component.html',
  styleUrls: ['./slice-pipes.component.css']
})
export class SlicePipesComponent {
  // Example arrays
  fruits: string[] = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  letters: string = 'abcdefghijklmnopqrstuvwxyz';
}

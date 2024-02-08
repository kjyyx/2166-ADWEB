import { Component } from '@angular/core';

@Component({
  selector: 'app-currency-pipes',
  templateUrl: './currency-pipes.component.html',
  styleUrls: ['./currency-pipes.component.css']
})
export class CurrencyPipesComponent {
  price1: number = 1234.56;
  price2: number = 7890.12;
  price3: number = 345.678;
}

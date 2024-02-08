import { Component } from '@angular/core';

@Component({
  selector: 'app-date-pipes',
  templateUrl: './date-pipes.component.html',
  styleUrls: ['./date-pipes.component.css']
})
export class DatePipesComponent {
  // Example dates
  currentDate: Date = new Date();
  futureDate: Date = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate() + 7);
  pastDate: Date = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate() - 7);
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-json-pipes',
  templateUrl: './json-pipes.component.html',
  styleUrls: ['./json-pipes.component.css']
})
export class JsonPipesComponent {
  // Example JSON data
  jsonData: any = {
    name: 'John Doe',
    age: 30,
    occupation: 'Software Engineer'
  };
}

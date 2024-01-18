import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  //String implementation

  position = 'Student';
  work_experience = 16;
  email = 'kyzen1123@gmail.com';
  website = 'www.KyzenEProtfolio.com';
  phone = 565 - 432 - 6781;

  //image interpolation/binding
  imageURL =
    'assets/kpj.jpg';
  imageW: number = 200;
  imageH: number = 200;
}

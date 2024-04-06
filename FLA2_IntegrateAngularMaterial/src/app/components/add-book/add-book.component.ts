import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatSnackBar } from '@angular/material/snack-bar';
import { CrudService } from './../../service/crud.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  bookForm: FormGroup;
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
    from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
    originally bred for hunting.`;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService,
    private snackBar: MatSnackBar
  ) {
    this.bookForm = this.formBuilder.group({
      title: [''],
      price: [''],
      description: [''],
      book_type: ['']
    });
  }

  ngOnInit() { }

  onSubmit(): any {
    this.crudService.AddBook(this.bookForm.value)
      .subscribe(() => {
        console.log('Data added successfully!');
        this.ngZone.run(() => this.router.navigateByUrl('/books-list'));
        this.snackBar.open('Book added successfully!', 'Close', {
          duration: 3000,
          verticalPosition: 'top'
        });
      }, (err) => {
        console.log(err);
        this.snackBar.open('Error adding book!', 'Close', {
          duration: 3000,
          verticalPosition: 'top'
        });
      });
  }
}

import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})

export class BookDetailComponent implements OnInit {

  getId: any;
  updateForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService,
    private snackBar: MatSnackBar
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.crudService.GetBook(this.getId).subscribe(res => {
      this.updateForm.setValue({
        title: res['title'],
        price: res['price'],
        description: res['description'],
        book_type: res['book_type']
      });
    });

    this.updateForm = this.formBuilder.group({
      title: [''],
      price: [''],
      description: [''],
      book_type: ['']
    })
  }

  ngOnInit() { }

onUpdate(): any {
  this.crudService.updateBook(this.getId, this.updateForm.value)
    .subscribe(() => {
      console.log('Data updated successfully!');
      this.ngZone.run(() => this.router.navigateByUrl('/books-list'));
      this.snackBar.open('Book updated successfully!', 'Close', {
        duration: 3000, // Duration in milliseconds
        verticalPosition: 'top' // Position of the snack bar
      });
    }, (err) => {
      console.log(err);
      this.snackBar.open('Error updating book!', 'Close', {
        duration: 3000, // Duration in milliseconds
        verticalPosition: 'top' // Position of the snack bar
      });
    });
}

}
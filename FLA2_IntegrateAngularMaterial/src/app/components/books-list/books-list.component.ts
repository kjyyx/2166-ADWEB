import { Component, OnInit, ViewChild } from '@angular/core';
import { CrudService } from './../../service/crud.service';
import { Sort } from '@angular/material/sort';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  displayedColumns: string[] = ['title', 'price', 'description', 'type', 'action'];
  Books: any = [];
  sortedData: any[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService.GetBooks().subscribe(res => {
      this.Books = res;
      this.sortedData = this.Books.slice(); // Initialize sortedData with original Books
    });
  }

  sortData(sort: Sort) {
    this.sortedData = this.Books.slice(); // Always start with a copy of the original data
    if (!sort.active || sort.direction === '') {
      return; // No sorting to be done
    }

    this.sortedData.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'title':
          return this.compare(a.title, b.title, isAsc);
        case 'price':
          return this.compare(a.price, b.price, isAsc);
        case 'description':
          return this.compare(a.description, b.description, isAsc);
        case 'type':
          return this.compare(a.book_type, b.book_type, isAsc);
        default:
          return 0;
      }
    });
  }

  delete(id: any) {
    if (window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteBook(id).subscribe(() => {
        this.reloadBooks();
      });
    }
  }

  private reloadBooks() {
    this.crudService.GetBooks().subscribe(res => {
      this.Books = res;
      this.sortedData = this.Books.slice(); // Update sortedData after reload
      if (this.paginator) {
        this.paginator.firstPage(); // Reset paginator to first page
      }
    });
  }

  paginateBooks(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.sortedData = this.Books.slice(startIndex, endIndex);
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.scss']
})
export class SearchCourseComponent implements OnInit {
  @Output() searchTerm = new EventEmitter<string>();
  
  searchText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  search(): void {
    this.searchTerm.emit(this.searchText);
  }

}

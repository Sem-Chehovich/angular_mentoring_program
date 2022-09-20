import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.scss']
})
export class SearchCourseComponent implements OnInit {

  searchText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  search(): void {
    console.log(`You searched for this word: ${this.searchText}`);
  }

}

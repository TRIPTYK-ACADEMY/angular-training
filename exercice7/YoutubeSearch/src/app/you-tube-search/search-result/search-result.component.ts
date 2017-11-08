import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { SearchResult } from '../../models/search-result.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchResultComponent implements OnInit {
  @Input() result: SearchResult;
  constructor() {}

  ngOnInit() {}
}

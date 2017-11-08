import { Http, Response } from '@angular/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SimpleHttpComponent implements OnInit {
  data: Object;
  loading: boolean;
  constructor(private http: Http) {}

  ngOnInit() {}

  makeRequest() {
    this.loading = true;
    this.http
      .request('http://www.mocky.io/v2/5a0348bc3100004d0d916a04')
      .subscribe((res: Response) => {
        this.data = res.json();
        this.loading = false;
      });
  }
}

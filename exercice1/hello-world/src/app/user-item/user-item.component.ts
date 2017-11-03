import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-item',
  // templateUrl: './user-item.component.html',
  template: `<p> Hello {{name}} </p>`,
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
name: string; // <-- 1.added name property
  constructor() {
    this.name = 'joelle'; // set the name
   }

  ngOnInit() {
  }

}

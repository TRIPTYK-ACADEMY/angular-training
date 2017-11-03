import { Component, HostBinding, OnInit, Input } from '@angular/core';
import { Article } from './article.model';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  // step3
  @Input() article: Article;
  // Step2
//  article: Article;
  // Step1
  // votes: number;
  // title: string;
  // link: string;
  constructor() {
    // Step 3
    // Step2
    // this.article = new Article('angular 2', 'http://www.angular.io', 3);
    // Step1
    // this.title = 'angular';
    // this.link = 'http://angular.io';
    // this.votes = 10;
  }
  voteUp() {
    this.article.voteUp();
    return false;
  }

  voteDown() {
    this.article.voteDown();
    return false;
  }
  ngOnInit() {
  }

}

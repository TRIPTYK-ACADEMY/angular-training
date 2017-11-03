import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  articles: Article[]= [];
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Àdding article title :${title.value} and link ${link.value}`);
    this.articles.push(new Article(title.value, link.value));
    title.value = '';
    link.value = '';
    return false;
  }
  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
  constructor() {
    this.articles.push(new Article('ember', 'http://emberjs.com', 1000));
    this.articles.push(new Article('angular', 'http://angular.io', 100));
    this.articles.push(new Article('vueJs', 'http://vuehs.io', 10));
  }
}

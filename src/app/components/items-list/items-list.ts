import { Component } from '@angular/core';
import { ItemCard } from '../item-card/item-card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsService } from '../../shared/services/news';
import { Observable } from 'rxjs';
import { NewsItem } from '../../shared/models/news.model';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemCard],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css',
})
export class ItemsList {

  searchTermInput: string = '';
  searchPerformed = false;

  news$!: Observable<NewsItem[]>;

  constructor(private newsService: NewsService) {
    this.news$ = this.newsService.news$;
    this.newsService.filterNews('');
  }

  performSearch(): void {
    this.searchPerformed = true;
    this.newsService.filterNews(this.searchTermInput);
  }
}

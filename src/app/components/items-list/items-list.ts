import { Component, OnInit } from '@angular/core';
import { ItemCard } from '../item-card/item-card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsService } from '../../shared/services/news';
import { Observable } from 'rxjs';
import { NewsItem } from '../../shared/models/news.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemCard, RouterLink],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css',
})
export class ItemsList implements OnInit {

  searchTermInput = '';
  searchPerformed = false;

  news$!: Observable<NewsItem[]>;

  constructor(private newsService: NewsService) {
    this.news$ = this.newsService.news$;
  }

  ngOnInit(): void {
    this.newsService.loadNews();
  }

  performSearch(): void {
    this.searchPerformed = true;
    this.newsService.filterNews(this.searchTermInput);
  }
}

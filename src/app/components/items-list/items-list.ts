import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsItem } from '../../shared/models/news.model';
import { ItemCard } from '../item-card/item-card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsService } from '../../shared/services/news';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemCard],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css',
})
export class ItemsList implements OnInit, OnDestroy {
  searchTermInput: string = "";
  searchTerm: string = "";
  searchPerformed = false;

  news: NewsItem[] = [];

  private destroy$ = new Subject<void>();

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.news$
      .pipe(takeUntil(this.destroy$))
      .subscribe(items => {
        this.news = items;
      });

    this.newsService.filterNews("");
  }

  performSearch(): void {
    this.searchTerm = this.searchTermInput;
    this.searchPerformed = true;

    this.newsService.filterNews(this.searchTerm);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

import { Component, OnInit } from '@angular/core';
import { NewsItem } from '../../shared/models/news.model';
import { ItemCard } from '../item-card/item-card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsService } from '../../shared/services/news';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemCard],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css',
})
export class ItemsList implements OnInit {
  searchTermInput: string = "";
  searchTerm: string = "";
  searchPerformed = false;

  selectedItem: NewsItem | null = null;

  news: NewsItem[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.news = this.newsService.getItems();
  }

  performSearch() {
    this.searchTerm = this.searchTermInput;
    this.searchPerformed = true;
  }

  get filteredNews(): NewsItem[] {
    return this.news.filter(item =>
      item.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  handleSelect(item: NewsItem) {
    this.selectedItem = item;
  }
}

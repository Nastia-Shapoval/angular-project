import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NewsItem } from '../../shared/models/news.model';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './item-card.html',
  styleUrl: './item-card.css',
})
export class ItemCard {
  @Input() newsItem!: NewsItem;

  @Output() select = new EventEmitter<NewsItem>();

  onSelect() {
    this.select.emit(this.newsItem);
  }
}

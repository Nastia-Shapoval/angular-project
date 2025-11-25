import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NewsItem } from '../../shared/models/news.model';
import { RouterModule } from '@angular/router';
import { TruncatePipe } from '../../shared/pipes/truncate.pipe';
import { HoverHighlightDirective } from '../../shared/directives/hover-highlight.directive';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, TruncatePipe, HoverHighlightDirective, RouterModule],
  templateUrl: './item-card.html',
  styleUrl: './item-card.css',
})
export class ItemCard {
  @Input() newsItem!: NewsItem;

  }

import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './item-card.html',
  styleUrl: './item-card.css',
})
export class ItemCard {}


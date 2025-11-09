import { Component } from '@angular/core';
import { NewsItem } from '../../shared/models/news.model';
import { ItemCard } from '../item-card/item-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, ItemCard],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css',
})
export class ItemsList {
  news: NewsItem[] = [
    {
      id: 1,
      title: 'Apple презентувала новий чип M5',
      description:
        'Компанія Apple представила процесор M5, який став у 2,5 рази швидшим за попередній M4 та має покращене енергоспоживання.',
      imageUrl: 'assets/news/apple-m5.jpg',
      date: '2025-10-28',
    },
    {
      id: 2,
      title: 'Google запустила штучний інтелект Gemini 2',
      description:
        'Оновлений AI Gemini 2 тепер інтегровано у всі сервіси Google, включаючи Gmail, Docs та Chrome.',
      imageUrl: 'assets/news/gemini2.jpg',
      date: '2025-10-20',
    },
    {
      id: 3,
      title: 'Microsoft інтегрує Copilot у Windows 12',
      description:
        'Copilot стане центральним елементом нової операційної системи Windows 12, допомагаючи користувачам автоматизувати рутинні дії.',
      imageUrl: 'assets/news/windows12.jpg',
      date: '2025-09-30',
    },
    {
      id: 4,
      title: 'OpenAI випустила GPT-5',
      description:
        'OpenAI представила модель GPT-5 із покращеним розумінням контексту, логіки та можливістю генерувати креативний контент із високою точністю.',
      imageUrl: 'assets/news/gpt5.jpg',
      date: '2025-09-15',
    },
    {
      id: 5,
      title: 'Meta розробляє віртуальні офіси у метавсесвіті',
      description:
        'Meta тестує платформу Horizon Workspaces, яка дозволяє компаніям створювати власні віртуальні офіси для роботи з VR-окулярами.',
      imageUrl: 'assets/news/meta-vr.jpg',
      date: '2025-08-25',
    },
  ];
}

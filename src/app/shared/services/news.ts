import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { NewsItem } from '../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private newsSubject = new BehaviorSubject<NewsItem[]>([]);
  news$ = this.newsSubject.asObservable();

  constructor(private http: HttpClient) {}

  loadNews(): void {
    this.http.get<NewsItem[]>('/news')
      .subscribe(data => this.newsSubject.next(data));
  }

  getItemById(id: number): Observable<NewsItem> {
    return this.http.get<NewsItem>(`/news/${id}`);
  }

  addItem(item: any): Observable<NewsItem> {
    return this.http.post<NewsItem>('/news', item);
  }

  filterNews(search: string): void {
    const current = this.newsSubject.getValue();
    const filtered = current.filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    this.newsSubject.next(filtered);
  }
}

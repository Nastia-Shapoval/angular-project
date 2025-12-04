import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
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
      .pipe(catchError(this.handleError))
      .subscribe(data => this.newsSubject.next(data));
  }

  getItemById(id: number): Observable<NewsItem> {
    return this.http.get<NewsItem>(`/news/${id}`)
      .pipe(catchError(this.handleError));
  }

  addItem(item: any): Observable<NewsItem> {
    return this.http.post<NewsItem>('/news', item)
      .pipe(catchError(this.handleError));
  }

  filterNews(search: string): void {
    const current = this.newsSubject.getValue();
    const filtered = current.filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    this.newsSubject.next(filtered);
  }

  private handleError(error: HttpErrorResponse) {
    console.error('HTTP ERROR:', error);
    return throwError(() =>
      new Error('Сталася помилка при запиті до сервера 😢')
    );
  }
}

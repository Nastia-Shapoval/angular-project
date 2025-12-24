import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemsList } from './items-list';
import { NewsService } from '../../shared/services/news';
import { of } from 'rxjs';

describe('ItemsList Integration Test', () => {
  let fixture: ComponentFixture<ItemsList>;

  const mockNewsService = {
    news$: of([
      {
        id: 1,
        title: 'Новина',
        description: 'Опис',
        imageUrl: '',
        date: '',
        views: 100
      }
    ]),
    loadNews: jasmine.createSpy()
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemsList],
      providers: [
        { provide: NewsService, useValue: mockNewsService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemsList);
    fixture.detectChanges();
  });

  it('повинен відображати компонент ItemCard', () => {
    const cards = fixture.nativeElement.querySelectorAll('app-item-card');
    expect(cards.length).toBe(1);
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemCard } from './item-card';
import { RouterTestingModule } from '@angular/router/testing';

describe('ItemCard', () => {
  let component: ItemCard;
  let fixture: ComponentFixture<ItemCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCard, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemCard);
    component = fixture.componentInstance;

    component.newsItem = {
      id: 1,
      title: 'Test news',
      description: 'Very long description for testing truncate pipe',
      imageUrl: 'test.jpg',
      date: '2025-01-01',
      views: 5000
    };

    fixture.detectChanges();
  });

  it('повинен відображати заголовок новини', () => {
    const title = fixture.nativeElement.querySelector('h3');
    expect(title.textContent).toContain('Test news');
  });

  it('повинен показувати бейдж "Популярне"', () => {
    const badge = fixture.nativeElement.querySelector('.badge');
    expect(badge).toBeTruthy();
  });
});

export interface NewsItem {
  id: number;          // Унікальний ідентифікатор
  title: string;       // Заголовок новини
  description: string; // Короткий опис
  imageUrl: string;    // Посилання на зображення
  date: string;        // Дата публікації
  views: number;       // кількість переглядів новини
}

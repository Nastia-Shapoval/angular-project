import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  appTitle = 'Новини ІТ-індустрії'; // Назва додатку
  currentYear = new Date().getFullYear(); // Поточний рік
}

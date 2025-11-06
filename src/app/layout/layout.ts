import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { ItemsList } from '../components/items-list/items-list';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, ItemsList],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
}

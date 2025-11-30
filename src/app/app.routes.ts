import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { ItemsList } from './components/items-list/items-list';
import { ItemDetails } from './item-details/item-details';
import { ItemForm } from './components/item-form/item-form';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: 'items', component: ItemsList },
      { path: 'items/create', component: ItemForm },
      { path: 'items/:id', component: ItemDetails },
      { path: '', redirectTo: 'items', pathMatch: 'full' }
    ]
  }
];

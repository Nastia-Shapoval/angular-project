import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { ItemsList } from './components/items-list/items-list';
import { ItemDetails } from './item-details/item-details';
import { ItemForm } from './components/item-form/item-form';
import { authGuard } from './shared/guards/auth.guard';
import { LoginComponent } from './components/auth/login/login';
import { RegisterComponent } from './components/auth/register/register';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: 'items', component: ItemsList },
      {
        path: 'items/create',
        component: ItemForm,
        canActivate: [authGuard]
      },
      { path: 'items/:id', component: ItemDetails },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', redirectTo: 'items', pathMatch: 'full' }
    ]
  }
];

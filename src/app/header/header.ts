import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../shared/services/auth';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  appTitle = 'Новини ІТ-індустрії';

  constructor(public auth: AuthService) {}

  logout(): void {
    this.auth.logout();
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../shared/services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  login(): void {
    this.auth.login(this.email, this.password)
      .subscribe((success: boolean) => {
        if (success) {
          alert('Вхід успішний');
          this.router.navigate(['/items']);
        } else {
          alert('Невірний email або пароль');
        }
      });
  }
}

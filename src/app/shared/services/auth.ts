import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface User {
  id?: number;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usersUrl = '/users';

  constructor(private http: HttpClient) {}

  register(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user);
  }

  login(email: string, password: string): Observable<boolean> {
    return this.http.get<User[]>(`${this.usersUrl}?email=${email}`).pipe(
      map(users => {
        const user = users[0];
        if (user && user.password === password) {
          const fakeToken = 'jwt-' + btoa(email);
          localStorage.setItem('token', fakeToken);
          return true;
        }
        return false;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}

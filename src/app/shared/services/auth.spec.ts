import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });

    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
    localStorage.clear();
  });

  it('повинен логінити користувача з правильним паролем', () => {
    service.login('nastya@gmail.com', '123456').subscribe(result => {
      expect(result).toBe(true);
      expect(localStorage.getItem('token')).toBeTruthy();
    });

    const req = httpMock.expectOne('/users?email=nastya@gmail.com');
    req.flush([{ email: 'nastya@gmail.com', password: '123456' }]);
  });

  it('повинен повертати false, якщо пароль неправильний', () => {
    service.login('nastya@gmail.com', '000000').subscribe(result => {
      expect(result).toBe(false);
    });

    const req = httpMock.expectOne('/users?email=nastya@gmail.com');
    req.flush([{ email: 'nastya@gmail.com', password: '123456' }]);
  });
});

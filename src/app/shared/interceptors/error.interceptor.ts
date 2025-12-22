import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { NotificationService } from '../services/notification.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  const notificationService = inject(NotificationService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {

      let message = 'Сталася невідома помилка 😢';

      if (error.status === 0) {
        message = 'Немає зʼєднання з сервером';
      }
      else if (error.status >= 400 && error.status < 500) {
        message = 'Помилка запиту. Перевірте введені дані';
      }
      else if (error.status >= 500) {
        message = 'Помилка сервера. Спробуйте пізніше';
      }

      notificationService.showError(message);

      return throwError(() => error);
    })
  );
};

import { HttpInterceptorFn } from '@angular/common/http';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const baseUrl = 'http://localhost:3000';

  const updatedRequest = req.clone({
    url: baseUrl + req.url
  });

  return next(updatedRequest);
};

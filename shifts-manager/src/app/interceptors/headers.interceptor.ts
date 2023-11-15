import { HttpInterceptorFn } from '@angular/common/http';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {
  const newRequest = req.clone({
    headers: req.headers.set('Access-Control-Allow-Origin', '*')
  });
  
  return next(newRequest);
};

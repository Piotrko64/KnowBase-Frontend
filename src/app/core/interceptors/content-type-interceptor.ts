import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

const ALLOWED_CONTENT_TYPE = 'application/knowbase.api+json';

export const ContentTypeInterceptor: HttpInterceptorFn = (
  request: HttpRequest<any>,
  next: HttpHandlerFn,
): Observable<HttpEvent<any>> => {
  request = request.clone({
    setHeaders: { 'Content-Type': ALLOWED_CONTENT_TYPE },
  });

  return next(request);
};

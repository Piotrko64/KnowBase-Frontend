import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

const ALLOWED_CONTENT_TYPE = 'application/knowbase.api+json';

export const ContentTypeInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
  request = request.clone({
    setHeaders: { 'Content-Type': ALLOWED_CONTENT_TYPE },
  });

  return next(request);
};

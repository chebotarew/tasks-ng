import { Inject, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { BASE_URL_TOKEN } from './config';

export interface IRes {
  data: any;
  error?: string;
}
@Injectable()
export class InterceptorService implements HttpInterceptor{
  constructor(@Inject(BASE_URL_TOKEN) private _baseUrl: string) {}
  public intercept<T extends IRes>(req: HttpRequest<T>, next: HttpHandler): Observable<HttpResponse<T>> {
    const headers: HttpHeaders = req.headers.append('Content-Type', 'application/json');
    const jsonReq: HttpRequest<T> = req.clone({
      headers,
      url: `${this._baseUrl}${req.url}`,
    });
    return next.handle(jsonReq).pipe(
      filter(this._isHttpResponse),
      map((res: HttpResponse<IRes>) => {
        return res.clone({ body: res.body && res.body.data });
      })
    );
  }
  private _isHttpResponse(event: HttpEvent<any>): event is HttpResponse<IRes> {
    if (event instanceof HttpResponse) {
      return true;
    }
    return false;
  }
}

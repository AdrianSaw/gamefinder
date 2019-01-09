import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string;

  constructor(
    private http: HttpClient,
  ) {
    this.baseUrl = environment.api_url;
  }

  public delete(path: string, options?: any): Observable<any> {
    return this.request(path, 'delete', options);
  }

  public get(path: string, options?: any): Observable<any> {
    return this.request(path, 'get', options);
  }

  public post(path: string, options?: any): Observable<any> {
    return this.request(path, 'post', options);
  }

  public put(path: string, options: any): Observable<any> {
    return this.request(path, 'put', options);
  }

  public patch(path: string, options: any): Observable<any> {
    return this.request(path, 'patch', options);
  }

  private request(path: string, method: string, options?: any): Observable<any> {
    options = options || {};
    let headers = null;
    const requestOptions = Object.assign(options, {
      headers: headers
    });
    return this.http.request(method, `${this.baseUrl}${path}`, requestOptions);
  }
}

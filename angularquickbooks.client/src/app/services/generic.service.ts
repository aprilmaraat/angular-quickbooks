import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
import { environment } from '../../environments/environment';
@Injectable()
export class GenericService {
    public baseUrl: string = environment.apiBaseUrl;
    public http: HttpClient;

    constructor(injector: Injector) {
        this.http = injector.get(HttpClient);
    }
    
    public get(endpoint: string = ''): Observable<any> {
      return this.http.get(this.baseUrl + endpoint);
    }

    public getById(id: number, endpoint: string = ''): Observable<any> {
      return this.http.get(this.baseUrl + endpoint + '?Id=' + id);
    }

    public post(object: any, endpoint: string = ''): Observable<any>{
      return this.http.post(this.baseUrl + endpoint, JSON.stringify(object));
    }

    public put(object: any, endpoint: string = ''): Observable<any> {
      return this.http.put(this.baseUrl + endpoint, JSON.stringify(object));
    }

    public delete(id: number, endpoint: string = ''): Observable<any> {
      return this.http.delete(`${this.baseUrl}${endpoint}?Id=${id}`);
    }
}

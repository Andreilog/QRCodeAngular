import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UrlItemModel } from '../models/urlItem.model';


@Injectable({
  providedIn: 'root'
})
export class UrlListService {

  public url = 'http://localhost:58452/api/sites';

  constructor(private http: HttpClient) { }

  getAll(): Observable<UrlItemModel[]> {
    return this.http.get<UrlItemModel[]>(this.url);
  }

  getByTitle(title: string): Observable<UrlItemModel> {
    const res = this.http.get<UrlItemModel[]>(this.url)
    .pipe(
      mergeMap(x => x),
      first(x => x.title === title)
    );
    return res;
  }

  getQRImage(title: string): Observable<Blob> {
    return this.http.get(`${this.url}/${title}`, { responseType: 'blob' });
  }
}

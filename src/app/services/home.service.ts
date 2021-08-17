import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export interface MyData {
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private API_URL = 'http://localhost:9999'
  
  constructor(private httpClient: HttpClient) { }


  public getValue() {
    return 'real value';
  }

  public getData(nameFilter: string = ''): Observable<MyData[]> {
    let apiObserverable = this.httpClient.get<MyData[]>(this.API_URL + '/data');
 
    if (nameFilter != '') {
      apiObserverable = apiObserverable.pipe(map(value => value.filter(data => data.name.indexOf(nameFilter) != -1)));
    }
 
    return apiObserverable.pipe(catchError(error => of<MyData[]>([])));
  }
}

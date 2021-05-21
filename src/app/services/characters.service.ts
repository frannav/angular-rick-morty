import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private static apiBaseUrl = 'https://rickandmortyapi.com/api/character/1,2,3,4';


  constructor(private http: HttpClient ) {
  }

  getAll(): Promise<any> {
    return this.http.get('https://rickandmortyapi.com/api/character/1,2,3,4').pipe(take(1)).toPromise();
  }

}

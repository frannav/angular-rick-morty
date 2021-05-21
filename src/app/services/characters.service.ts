import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private static apiBaseUrl = 'https://rickandmortyapi.com/api/character/';
  private static apiId = '1';


  constructor(private http: HttpClient ) {
  }

  getCharacters() {
    this.http.get(`${CharactersService.apiBaseUrl}/${CharactersService.apiId}`).subscribe(
      (data) => {
        console.log(data);
      }
    )
  }
}

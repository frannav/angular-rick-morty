import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private static apiBaseUrl = 'https://rickandmortyapi.com/api/character/';

  constructor( private http: HttpClient ) {

  }

  get(characterId: string) {
    try {
      this.http.get(`${CharactersService.apiBaseUrl}/${characterId}`, {
        
      }).toPromise();
    }
    catch (error) {
      console.log({ error });
    }
  }
}

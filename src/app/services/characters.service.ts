import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private static apiBaseUrl = 'https://rickandmortyapi.com/api/character/';


  constructor(private http: HttpClient ) {
  }

  
}

import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  public listOfCharacters: any[] = [];

  constructor(public characterService: CharactersService) { }

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters() {
    this.characterService.getAll().then(
      (items) => {
        this.listOfCharacters = items;
        console.log(this.listOfCharacters);
      }
    ).catch(
      (errr) => {
        console.log(errr);
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PlayerService } from '../../service/player.service';
import { Game } from 'src/app/class/game';
import { OwnedGamesResponse } from 'src/app/class/owned-games-response';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  protected games: Game[];
  private errorMessage: string;

  constructor(private playerService: PlayerService) { }

  onSubmit(f: NgForm) {
    this.games = undefined;
    this.errorMessage = undefined;
    this.playerService.getOwnedGames(f.value.input).subscribe((response: OwnedGamesResponse) => {
      this.games = response.games;
    }, error => {
      this.errorMessage = error.error.message;
    });
  }
}

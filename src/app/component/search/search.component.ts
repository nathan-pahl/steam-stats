import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Friend } from 'src/app/class/friend';
import { FriendsListResponse } from 'src/app/class/friends-list-response';
import { Game } from 'src/app/class/game';
import { OwnedGamesResponse } from 'src/app/class/owned-games-response';
import { PlayerService } from '../../service/player.service';
import { FriendSummary } from 'src/app/class/friend-summary';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent {

  protected games: Game[];
  protected friends: FriendSummary[];
  private errorMessage: string;

  constructor(private playerService: PlayerService) { }

  onSubmit(f: NgForm) {
    this.games = undefined;
    this.friends = undefined;
    this.errorMessage = undefined;
    this.playerService.getOwnedGames(f.value.input).subscribe((response: OwnedGamesResponse) => {
      this.games = response.games;
    }, error => {
      this.errorMessage = error.error.message;
    });
    this.playerService.getFriendsList(f.value.input).subscribe((response: FriendsListResponse) => {
      this.friends = response.friends;
    }, error => {
      this.errorMessage = error.error.message;
    });
  }
}

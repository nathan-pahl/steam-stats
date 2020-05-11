import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Friend } from 'src/app/class/friend';
import { FriendsListResponse } from 'src/app/class/friends-list-response';
import { Game } from 'src/app/class/game';
import { OwnedGamesResponse } from 'src/app/class/owned-games-response';
import { PlayerService } from '../../service/player.service';
import { FriendSummary } from 'src/app/class/friend-summary';
import { GamelistService } from 'src/app/service/gamelist.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent {

  protected games: Game[];
  protected friends: FriendSummary[];
  public gameList: Game[];
  private errorMessage: string;

  constructor(private playerService: PlayerService, private gamelistService: GamelistService, private userService: UserService) {
    this.userService = userService;
    this.gamelistService.mainGameListChange.subscribe((gameList: Game[]) => {
      this.games = gameList;
    });
    this.gamelistService.gameListChange.subscribe((gameList: Game[]) => {
      this.gameList = gameList;
    });
  }

  onSubmit(f: NgForm) {
    this.games = undefined;
    this.friends = undefined;
    this.errorMessage = undefined;
    this.playerService.getPlayerSummary(f.value.input).subscribe((response: FriendsListResponse) => {
      this.userService.setPlayer(response.friends[0].player);
      this.userService.setFriend(response.friends[0].friend);
    }, error => {
      this.errorMessage = error.error.message;
    });
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

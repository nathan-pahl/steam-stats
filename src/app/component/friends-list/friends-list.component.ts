import { Component, OnInit, Input } from '@angular/core';
import { Friend } from 'src/app/class/friend';
import { Sort } from '@angular/material/sort';
import { FriendSummary } from 'src/app/class/friend-summary';
import { Player } from 'src/app/class/player';
import { PlayerService } from 'src/app/service/player.service';
import { OwnedGamesResponse } from 'src/app/class/owned-games-response';
import { FriendService } from 'src/app/service/friend.service';
import { GamelistService } from 'src/app/service/gamelist.service';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.less']
})
export class FriendsListComponent implements OnInit {

  @Input() friends: FriendSummary[];
  sortedFriends: FriendSummary[];

  constructor(private playerService: PlayerService, private friendService: FriendService, private gamelistService: GamelistService) {
  }

  ngOnInit() {
    this.sortedFriends = this.friends.slice();
  }

  sortFriends(sort: Sort) {
    const friends = this.friends.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedFriends = friends;
      return;
    }

    this.sortedFriends = friends.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return compare(a.player.personaname, b.player.personaname, isAsc);
        // case 'time': return compare(a.playtime_forever, b.playtime_forever, isAsc);
        default: return 0;
      }
    });
  }

  search(player: Player) {
    this.friendService.setPlayer(player);
    this.playerService.getOwnedGames(player.steamid).subscribe((response: OwnedGamesResponse) => {
      console.log(response.games.length);
      this.gamelistService.setGameList(response.games);
    }, (error) => {
      console.log("Error getting games", error);
    })
  }

  compare(player: Player) {
    console.log({player});
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

import { Component, OnInit, Input } from '@angular/core';
import { Friend } from 'src/app/class/friend';
import { Sort } from '@angular/material/sort';
import { FriendSummary } from 'src/app/class/friend-summary';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {

  @Input() friends: FriendSummary[];
  sortedFriends: FriendSummary[];

  constructor() { }

  ngOnInit() {
    this.sortedFriends = this.friends.slice();
  }

  sortGames(sort: Sort) {
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
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

import { Component, OnInit, Input, ViewChild, SimpleChange, OnChanges } from '@angular/core';
import { Sort } from '@angular/material';
import { PlayerService } from 'src/app/service/player.service';
import { Game } from 'src/app/class/game';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  @Input() games: Game[];
  sortedGames: Game[];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.sortedGames = this.games.slice();
  }

  sortGames(sort: Sort) {
    const games = this.games.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedGames = games;
      return;
    }

    this.sortedGames = games.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'time': return compare(a.playtime_forever, b.playtime_forever, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

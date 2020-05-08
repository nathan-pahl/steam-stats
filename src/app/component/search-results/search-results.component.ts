import { Component, OnInit, Input, ViewChild, SimpleChange, OnChanges, SimpleChanges } from '@angular/core';
import { Sort } from '@angular/material';
import { PlayerService } from 'src/app/service/player.service';
import { Game } from 'src/app/class/game';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.less']
})
export class SearchResultsComponent implements OnInit {

  @Input() games: Game[];
  sortedGames: Game[];
  sortMethod: Sort;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.sortedGames = this.games.slice();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.games = changes.games.currentValue;
    this.sortedGames = this.games.slice();
    this.sortGames();
  }

  sortGames() {
    const games = this.games.slice();
    if (!this.sortMethod || !this.sortMethod.active || this.sortMethod.direction === '') {
      this.sortedGames = games;
      return;
    }

    this.sortedGames = games.sort((a, b) => {
      const isAsc = this.sortMethod.direction === 'asc';
      switch (this.sortMethod.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'time': return compare(a.playtime_forever, b.playtime_forever, isAsc);
        default: return 0;
      }
    });
  }

  setSortMethod(sortMethod: Sort) {
    this.sortMethod = sortMethod;
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

import { Injectable } from '@angular/core';
import { Game } from '../class/game';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamelistService {

  private gameList: Game[];

  public gameListChange: Subject<Game[]> = new Subject<Game[]>();

  constructor() {
    this.gameListChange.subscribe((gameList: Game[]) => {
      this.gameList = gameList;
    });
  }

  public getGameList(): Game[] {
    return this.gameList;
  }

  public setGameList(gameList: Game[]) {
    this.gameListChange.next(gameList);
  }

}

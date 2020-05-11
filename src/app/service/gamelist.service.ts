import { Injectable } from '@angular/core';
import { Game } from '../class/game';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamelistService {

  private mainGameList: Game[];
  private gameList: Game[];

  public mainGameListChange: Subject<Game[]> = new Subject<Game[]>();
  public gameListChange: Subject<Game[]> = new Subject<Game[]>();

  constructor() {
    this.mainGameListChange.subscribe((gameList: Game[]) => {
      this.mainGameList = gameList;
    });
    this.gameListChange.subscribe((gameList: Game[]) => {
      this.gameList = gameList;
    });
  }

  public getMainGameList(): Game[] {
    return this.mainGameList;
  }

  public setMainGameList(gameList: Game[]) {
    this.mainGameListChange.next(gameList);
  }

  public getGameList(): Game[] {
    return this.gameList;
  }

  public setGameList(gameList: Game[]) {
    this.gameListChange.next(gameList);
  }

}

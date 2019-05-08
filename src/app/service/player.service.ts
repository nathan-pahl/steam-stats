import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OwnedGamesResponse } from '../class/owned-games-response';
import { Game } from '../class/game';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private getGamesUrl: string;
  private games: Game[];

  constructor(private http: HttpClient) {
    this.getGamesUrl = "http://localhost:8080/getGames";
  }

  public getOwnedGames(input: string): Observable<OwnedGamesResponse> {
    let params = new HttpParams().set('input', input);
    return this.http.get<OwnedGamesResponse>(this.getGamesUrl, {
      params: params
    });
  }

  public getGames(): Game[] {
    return this.games;
  }

}

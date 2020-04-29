import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OwnedGamesResponse } from '../class/owned-games-response';
import { Game } from '../class/game';
import { FriendsListResponse } from '../class/friends-list-response';
import { Friend } from '../class/friend';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private getGamesUrl: string;
  private getFriendsUrl: string;
  private games: Game[];
  private friends: Friend[];

  constructor(private http: HttpClient) {
    this.getGamesUrl = "http://localhost:8080/getGames";
    this.getFriendsUrl = "http://localhost:8080/getFriends";
  }

  public getOwnedGames(input: string): Observable<OwnedGamesResponse> {
    let params = new HttpParams().set('input', input);
    return this.http.get<OwnedGamesResponse>(this.getGamesUrl, {
      params: params
    });
  }

  public getFriendsList(input: string): Observable<FriendsListResponse> {
    let params = new HttpParams().set('input', input);
    return this.http.get<FriendsListResponse>(this.getFriendsUrl, {
      params: params
    });
  }

  public getGames(): Game[] {
    return this.games;
  }

  public getFriends(): Friend[] {
    return this.friends;
  }

}

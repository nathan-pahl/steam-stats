import { Injectable } from '@angular/core';
import { Player } from '../class/player';
import { Friend } from '../class/friend';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  private player: Player;
  private friend: Friend;

  constructor() { }

  public getPlayer(): Player {
    return this.player;
  }

  public setPlayer(player: Player) {
    this.player = player;
  }

  public getFriend(): Friend {
    return this.friend;
  }

  public setFriend(friend: Friend) {
    this.friend = friend;
  }

}

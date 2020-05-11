import { Injectable } from '@angular/core';
import { Friend } from '../class/friend';
import { Player } from '../class/player';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private friend: Friend;
  private player: Player;

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

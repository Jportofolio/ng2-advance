
import { Component } from '@angular/core';

import { HeroService } from './hero.service';
import { UserService } from '../core/user.service';

@Component({
    template: `
      <h2 highlight>Heroes of {{UserName}}</h2>
      <router-outlet></router-outlet>`,
    providers: [ HeroService ]
})

export class HeroComponent {
  UserName = '';
  constructor(UserService: UserService){
    this.UserName = UserService.userName;
  }
}
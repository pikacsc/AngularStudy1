import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PlayerRoutingModule } from './player-routing.module';
import { ShareModule } from '../share/share.module';
import { PlayerComponent } from './player.component';

@NgModule({
  imports: [
    CommonModule,
    PlayerRoutingModule,
    ShareModule
  ],
  declarations: [PlayerComponent]
})
export class PlayerModule {
  constructor() {
    console.log('PlayerModule # constructor() called.');
    console.log(new Date().toLocaleString());
  }
}

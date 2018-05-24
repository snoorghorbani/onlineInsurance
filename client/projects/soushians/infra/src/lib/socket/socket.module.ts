import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocketService } from './socket.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SocketService
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class SocketModule { }

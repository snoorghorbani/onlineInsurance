import { NgModule } from '@angular/core';

import { PipesModule } from './pipes';
import { UtilityService } from "./utility.service";
import { SocketModule } from "./socket";
import './helper';
import './validators';

@NgModule({
        imports: [
                PipesModule,
                SocketModule
        ],
        declarations: [],
        providers: [UtilityService],
        exports: [
                PipesModule,
        ]
})
export class InfraModule { }

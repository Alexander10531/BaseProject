import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServersRoutingModule } from './servers-routing.module';
import { ServersComponent } from './servers.component';
import { TableModule } from 'src/app/shared/components/table/table.module';


@NgModule({
    declarations: [
        ServersComponent
    ],
    imports: [
        TableModule,
        CommonModule,
        ServersRoutingModule, 
    ]
})
export class ServersModule { }

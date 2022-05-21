import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventaryRoutingModule } from './inventary-routing.module';
import { InventaryComponent } from './inventary.component';
import { NoConnectionModule } from 'src/app/shared/components/no-connection/no-connection.module';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { LoadingModule } from 'src/app/shared/components/loading/loading.module';
import { BreadcrumbModule } from 'src/app/shared/components/breadcrumb/breadcrumb.module';


@NgModule({
  declarations: [
    InventaryComponent
  ],
  imports: [
    TableModule,
    CommonModule,
    LoadingModule,
    BreadcrumbModule,
    NoConnectionModule, 
    InventaryRoutingModule, 
  ]
})
export class InventaryModule { }

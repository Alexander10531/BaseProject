import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventaryDetailsRoutingModule } from './inventary-details-routing.module';
import { InventaryDetailsComponent } from './inventary-details.component';
import { NoConnectionModule } from 'src/app/shared/components/no-connection/no-connection.module';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { LoadingModule } from 'src/app/shared/components/loading/loading.module';
import { BreadcrumbModule } from 'src/app/shared/components/breadcrumb/breadcrumb.module';


@NgModule({
  declarations: [
    InventaryDetailsComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    LoadingModule,
    BreadcrumbModule,
    NoConnectionModule,
    InventaryDetailsRoutingModule
  ]
})
export class InventaryDetailsModule { }

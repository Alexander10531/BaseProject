import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyinventaryRoutingModule } from './myinventary-routing.module';
import { MyinventaryComponent } from './myinventary.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TableModule } from 'src/app/shared/components/table/table.module';

@NgModule({
  declarations: [
    MyinventaryComponent
  ],
  imports: [
    CommonModule,
    MyinventaryRoutingModule,
    FontAwesomeModule,
    TableModule
  ],
  exports: [
    MyinventaryComponent
  ]
})
export class MyinventaryModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './user-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BreadcrumbModule } from 'src/app/shared/components/breadcrumb/breadcrumb.module';

@NgModule({
    declarations: [
  ],
    imports: [
        CommonModule,
        RouterModule,
        FontAwesomeModule,
        UserRoutingModule,
        BreadcrumbModule,
    ], 
})
export class UserModule { }
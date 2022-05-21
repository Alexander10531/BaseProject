import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
    declarations: [
        BreadcrumbComponent
    ],
    imports: [
        CommonModule, 
        FontAwesomeModule,
    ], 
    exports : [
        BreadcrumbComponent,
        RouterModule,
    ]
})
export class BreadcrumbModule { }

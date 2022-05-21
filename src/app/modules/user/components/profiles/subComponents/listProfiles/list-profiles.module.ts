import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListProfilesComponent } from './list-profiles.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListProfilesRoutingModule } from './list-profiles-routing.module';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { BreadcrumbModule } from 'src/app/shared/components/breadcrumb/breadcrumb.module';

@NgModule({
    declarations: [
        ListProfilesComponent
    ],
    imports: [
        TableModule, 
        FormsModule,
        CommonModule,
        BreadcrumbModule, 
        FontAwesomeModule,
        ListProfilesRoutingModule, 
    ], 
    exports : [
        ListProfilesComponent, 
    ]
})
export class ListProfilesModule { }

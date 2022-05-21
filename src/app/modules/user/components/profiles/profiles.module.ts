import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ProfilesComponent } from './profiles.component';
import { ProfilesRoutingModule } from './profiles-routing.module';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BreadcrumbModule } from 'src/app/shared/components/breadcrumb/breadcrumb.module';


@NgModule({
    declarations: [
        ProfilesComponent,
    ],
    imports: [
        FormsModule,
        TableModule,
        CommonModule,
        FontAwesomeModule,
        ProfilesRoutingModule,
        BreadcrumbModule,
    ], 
    exports: [
        ProfilesComponent
    ],
})
export class ProfilesModule {}
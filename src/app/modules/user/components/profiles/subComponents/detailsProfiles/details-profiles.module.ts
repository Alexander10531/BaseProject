import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsProfilesRoutingModule } from './details-profiles-routing.module';
import { DetailsProfilesComponent } from './details-profiles.component';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { BreadcrumbModule } from 'src/app/shared/components/breadcrumb/breadcrumb.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavigationBarComponent } from 'src/app/shared/components/navigation-bar/navigation-bar.component';
import { NavigationBarModule } from 'src/app/shared/components/navigation-bar/navigation-bar.module';

@NgModule({
    declarations: [
        DetailsProfilesComponent
    ],
    imports: [
        TableModule,
        CommonModule,
        BreadcrumbModule,
        FontAwesomeModule, 
        NavigationBarModule,
        DetailsProfilesRoutingModule, 
    ], 
    exports : [
        DetailsProfilesComponent,
    ]
})
export class DetailsProfilesModule { }

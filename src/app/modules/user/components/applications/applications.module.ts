import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationsComponent } from './applications.component';
import { ApplicationsRoutingModule } from './applications-routing.module';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { LoadingModule } from '../../../../shared/components/loading/loading.module';
import { NoConnectionModule } from 'src/app/shared/components/no-connection/no-connection.module';
import { BreadcrumbModule } from 'src/app/shared/components/breadcrumb/breadcrumb.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        ApplicationsComponent, 
    ],
    imports: [
        TableModule,
        CommonModule,
        LoadingModule,
        BreadcrumbModule,
        FontAwesomeModule,
        NoConnectionModule,
        ApplicationsRoutingModule, 
    ], 
})
export class ApplicationsModule { }

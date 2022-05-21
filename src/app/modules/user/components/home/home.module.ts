import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { SolidCardModule } from 'src/app/shared/components/solid-card/solid-card.module';
import { BreadcrumbModule } from 'src/app/shared/components/breadcrumb/breadcrumb.module';

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        CardModule,
        CommonModule,
        SolidCardModule,
        HomeRoutingModule, 
        BreadcrumbModule,
    ], 
})
export class HomeModule { }

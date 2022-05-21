import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SidebarModule } from '../sidebar/sidebar.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        HeaderComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        SidebarModule,
        FontAwesomeModule,
    ], 
    exports : [
        HeaderComponent,
    ]
})
export class HeaderModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        TableComponent, 
    ],
    imports: [
        CommonModule, 
        FontAwesomeModule,
        FormsModule,
        RouterModule,
    ], 
    exports: [
        TableComponent,
    ]
})
export class TableModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoConnectionComponent } from './no-connection.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
    declarations: [
        NoConnectionComponent,
    ],
    imports: [
        CommonModule, 
        FontAwesomeModule, 
    ], 
    exports: [
        NoConnectionComponent,
    ]
})
export class NoConnectionModule { }

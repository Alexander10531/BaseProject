import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalMessageComponent } from './modal-message.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
    declarations: [
        ModalMessageComponent,
    ],
    imports: [
        CommonModule,
        FontAwesomeModule, 
    ], 
    exports: [
        ModalMessageComponent, 
    ]
})
export class ModalMessageModule { }
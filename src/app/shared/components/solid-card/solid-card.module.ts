import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolidCardComponent } from './solid-card.component';



@NgModule({
    declarations: [
        SolidCardComponent,
    ],
    imports: [
        CommonModule, 
    ],
    exports :[
        SolidCardComponent,
    ]
})
export class SolidCardModule { }

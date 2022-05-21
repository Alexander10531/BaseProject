import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './navigation-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        NavigationBarComponent,
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
    ], 
    exports :  [
        NavigationBarComponent,
    ]
})
export class NavigationBarModule { }

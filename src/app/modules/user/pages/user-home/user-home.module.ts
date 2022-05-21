import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserHomeComponent } from './user-home.component';
import { UserHomeRoutingModule } from './user-home-routing.module';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { ModalMessageModule } from 'src/app/shared/components/modal-message/modal-message.module';

@NgModule({
    declarations: [
        UserHomeComponent
    ],
    imports: [
        CardModule,
        HeaderModule,
        CommonModule,
        RouterModule,
        ModalMessageModule,
        UserHomeRoutingModule,
    ], 
    providers: [
    ]
})
export class UserHomeModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'src/app/shared/components/breadcrumb/breadcrumb.module';

@NgModule({
    declarations: [
        ProfileComponent,
    ],
    imports: [
        CommonModule,
        BreadcrumbModule,
        FontAwesomeModule, 
        ReactiveFormsModule,
        ProfileRoutingModule,
    ],
})
export class ProfileModule { }

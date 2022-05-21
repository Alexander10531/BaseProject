import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { DetailsProfilesComponent } from './details-profiles.component';

const routes: Routes = [
    {
        path : '', 
        component : DetailsProfilesComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsProfilesRoutingModule { }

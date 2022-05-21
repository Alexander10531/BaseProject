import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProfilesComponent } from './list-profiles.component';

const routes: Routes = [
    {
        path : "", 
        component : ListProfilesComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListProfilesRoutingModule { }
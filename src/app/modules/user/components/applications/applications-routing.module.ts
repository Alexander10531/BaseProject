import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ApplicationsComponent } from './applications.component';

const routes: Routes = [
    {
        path : '',
        component : ApplicationsComponent,
    } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationsRoutingModule { }

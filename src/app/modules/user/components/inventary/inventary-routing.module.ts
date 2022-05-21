import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventaryComponent } from './inventary.component';

const routes: Routes = [
    {
        path : "", 
        component : InventaryComponent,
    },
     
    {
      path : ":inventarioId", 
      loadChildren : () => import('./subComponents/inventary-details/inventary-details.module').then(m => m.InventaryDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventaryRoutingModule { }

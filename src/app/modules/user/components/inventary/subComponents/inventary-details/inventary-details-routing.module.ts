import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventaryDetailsComponent } from './inventary-details.component';

const routes: Routes = [
  {
      path : "", 
      component : InventaryDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventaryDetailsRoutingModule { }

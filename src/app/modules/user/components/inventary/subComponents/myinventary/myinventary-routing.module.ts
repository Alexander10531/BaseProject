import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyinventaryComponent } from './myinventary.component';

const routes: Routes = [
  {
    path: "",
    component: MyinventaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyinventaryRoutingModule { }

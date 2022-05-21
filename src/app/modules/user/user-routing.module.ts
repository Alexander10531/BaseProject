import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeGuardsGuard } from 'src/app/core/guards/homeGuards/home-guards.guard';

const routes: Routes = [
    {       
        path : 'home', 
        loadChildren : () => import('./pages/user-home/user-home.module').then(m => m.UserHomeModule),
        canActivate : [
            HomeGuardsGuard
        ]
    },  
    {       
        path : '', 
        loadChildren : () => import('../pages/login/login.module').then(m => m.LoginModule),
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

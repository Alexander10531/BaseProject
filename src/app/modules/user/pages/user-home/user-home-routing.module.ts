import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { UserHomeComponent } from './user-home.component';

const routes: Routes = [

    {
        path : '', 
        component :UserHomeComponent,
        children : [
            {
                path : '',
                loadChildren : () => import('../../components/home/home.module').then(m => m.HomeModule), 
            }, 
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserHomeRoutingModule { }
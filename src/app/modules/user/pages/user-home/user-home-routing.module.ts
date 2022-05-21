import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ScreenGuardsGuard } from 'src/app/core/guards/screenGuards/screen-guards.guard';
import { UserHomeComponent } from './user-home.component';

const routes: Routes = [

    {
        path : '', 
        component :UserHomeComponent,
        data : {
            breadcrumb : "Home"
        },
        children : [
            {
                path : '',
                loadChildren : () => import('../../components/home/home.module').then(m => m.HomeModule), 
            }, 
            {
                path : 'profile',
                loadChildren : () => import('../../components/profile/profile.module').then(m => m.ProfileModule),
            }, 
            {
                path : 'applications', 
                loadChildren : () => import('../../components/applications/applications.module').then(m => m.ApplicationsModule)
            }, 
            {
                path : 'servers', 
                loadChildren : () => import('../../components/servers/servers.module').then(m => m.ServersModule),
            }, 
            {
                path : 'profiles', 
                loadChildren : () => import('../../components/profiles/profiles.module').then(m => m.ProfilesModule),
                canActivate : [
                    ScreenGuardsGuard
                ]
            },
            {
                path : 'inventary', 
                loadChildren : () => import('../../components/inventary/inventary.module').then(m => m.InventaryModule), 
            },
            {
                path : 'myinventary', 
                loadChildren : () => import('../../components/inventary/subComponents/myinventary/myinventary.module').then(m => m.MyinventaryModule), 
            },
            {
                path : 'inventary/details', 
                loadChildren : () => import('../../components/inventary/subComponents/inventary-details/inventary-details.module').then(m => m.InventaryDetailsModule), 
            },
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserHomeRoutingModule { }
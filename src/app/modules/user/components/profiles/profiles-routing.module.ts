import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes: Routes = [

    {
        path : '', 
        loadChildren : () => import('./subComponents/listProfiles/list-profiles.module').then(m => m.ListProfilesModule)        
    }, 
    {
        path : ":profileId", 
        loadChildren : () => import('./subComponents/detailsProfiles/details-profiles.module').then(m => m.DetailsProfilesModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProfilesRoutingModule { }
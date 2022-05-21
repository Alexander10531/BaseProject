import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './shared/pages/not-found-page/not-found-page.component';

const routes: Routes = [
    {    
        path : "", 
        loadChildren : () => import('./modules/user/user.module').then(m => m.UserModule)
    },
    {
        path : "notFound",
        component : NotFoundPageComponent,
    },
    {
        path : "**",
        component : NotFoundPageComponent,  
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoginGuardGuard } from 'src/app/core/guards/loginGuards/login-guard.guard';

const routes: Routes = [
    {
        path : '', 
        component : LoginComponent,
        canActivate : [
            LoginGuardGuard,
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule { }

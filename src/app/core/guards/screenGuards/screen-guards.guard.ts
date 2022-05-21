import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenGuardsGuard implements CanActivate {

    constructor(private router : Router){}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

            let value = JSON.parse(localStorage.getItem('sidebarElem')!);
            for(let i = 0; i < value.length; i++){

                if(value[i].url.join("/") == state.url){
                    
                    return true;
                
                }

            }
            
            this.router.navigate(["/notFound"]);
            return false;
    }

}
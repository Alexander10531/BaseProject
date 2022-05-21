import { throwError } from 'rxjs';
import { tap } from 'rxjs';
import { catchError } from 'rxjs';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpEvent } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { HttpInterceptor} from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { HttpUserService } from '../../services/userService/http-user.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

    constructor(
        private userService : HttpUserService){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token: string | null= localStorage.getItem('token');
        let req : HttpRequest<any>;

        if(token && request.url != `${ env.URL }auth`){
            req = request.clone({
                setHeaders: {
                    'Authorization' : token
                }
            })

        }else{

            req = request.clone();
            
        }
        return next.handle(req).pipe(
    
            tap((event : any ) =>{

                let ok = event instanceof HttpResponse ? 'succeeded' : '';
                if(ok) {
                    
                    if(this.userService.getInterval){
                        
                        clearInterval(this.userService.getInterval);

                    }
                    localStorage.setItem("token", event.headers.get("token"))
                    localStorage.setItem("tokenExpiration", event.headers.get("tokenExpiration"))
                    this.userService.startInterval(parseInt(localStorage.getItem("tokenExpiration")!));

                }
            }),
            catchError((err : any) => {
                
                this.handleError(err);
                return throwError(err);

            })

        )
    
    }

    handleError(err : any){

        switch(err.status){

            case 401:
                this.authRequired(err);
                break; 
            default: 
                break; 

        }

    }

    authRequired(err : any){

        this.userService.setErrorJwt({
            existError : true, 
            code : 401, 
            message : err.message
        })

    }

}
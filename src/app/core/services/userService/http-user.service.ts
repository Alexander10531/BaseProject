import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { errorHandler } from '../../util/interfaces';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpUserService {

    private interval! : any; 
    private lastName! : string; 
    private firstName! : string;
    private errorJwt$ = new Subject<errorHandler>();
    constructor(private httpClient : HttpClient){}

    getTeams() : Observable<any>{

        return this.httpClient.get<Object>(`${ env.URL }equipos`);

    }

    sendEmailError() : Observable<any>{

        let date = new Date(); 
        var data = { 
            message: `Message : Se han presentado errores en el sistema de gestion e inventario, se requiere una revision dado que los servicios backend no estan funcionando de manera correcta
            Fecha:${ date.getDate() }/${ date.getMonth() }/${ date.getHours() }
            Hora: ${ date.getHours() }:${ date.getMinutes() }`
        }
        return this.httpClient.post(env.emailSender, data);
        
    }

    insertUser(persona : Object) : Observable<any>{

        return this.httpClient.put<Object>(
            `${ env.URL }personas/update`, persona);
        
    }
    
    getNameUser() : string{
        return `${ this.firstName } ${ this.lastName }`
    }

    setFirstName(newFirstName : string){

        this.firstName = newFirstName;
    
    }

    setLastName(lastName : string){

        this.lastName = lastName; 
    
    }

    getInfoUser() : Observable<any>{
        return this.httpClient.get(`${ env.URL }personas/personaEmail`) 
    }

    getProfiles() : Observable<any>{
        return this.httpClient.get(
            `${ env.URL }perfiles`);
    }

    insertProfile(body : any) : Observable<any>{

        return this.httpClient.post(`${ env.URL }perfiles`, body); 

    }

    setErrorJwt(valueError : errorHandler){

        this.errorJwt$.next(valueError);

    }

    getErrorJwt() : Observable<errorHandler>{

        return this.errorJwt$.asObservable();

    }

    closeSession() {

        localStorage.clear();
    }

    startInterval(value : number){

        this.interval = setInterval(() => {

            this.closeSession(); 
            this.setErrorJwt({

                existError : true,
                code : 401 

            })
        
        }, (1000 * 60) * value); 

    }

    get getInterval() : any{

        if(this.interval){

            return this.interval; 

        }

        return null; 

    }

}
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

    constructor(private httpClient : HttpClient){}

    authLogin(loginDto : Object) : Observable<any>{

        return this.httpClient.post<Object>(`${env.URL}auth`, loginDto);

    }

}
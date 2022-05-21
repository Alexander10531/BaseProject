import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

    constructor(private http : HttpClient){}

    getApplication() : Observable<any>{

        return this.http.get(`${ env.URL }aplicaciones/getAplicaciones`);

    }

}
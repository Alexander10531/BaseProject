import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilesService {

    constructor(private httpClient : HttpClient){}

    getProfileDetails(profileId : Number) : Observable<any>{

      return this.httpClient.get(`${ env.URL }perfiles/detailsProfile?perfilId=${ profileId }`)
  
  }

}
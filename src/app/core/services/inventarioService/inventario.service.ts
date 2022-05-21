import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';

@Injectable({
providedIn: 'root'
})
export class InventarioService {

    constructor(private httpClient:HttpClient) { }

    getInventario():Observable<any>{
        return this.httpClient.get(`${ env.URL }inventarios`);
    }

    getInventarioEquipo():Observable<any>{
        return this.httpClient.get(`${ env.URL }inventarios/inventarioEquipo`);
    }

    getInventarioDetails(inventarioId : Number) : Observable<any>{

        return this.httpClient.get(`${ env.URL }inventarioDetails?inventarioId=${ inventarioId }`)
    
    }

}
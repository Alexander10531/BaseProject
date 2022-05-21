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

    constructor(){}

    closeSession() {

        localStorage.clear();
    }

}
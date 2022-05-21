import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent{

    @Input() url! : string[];
    faHome : IconDefinition = faHome; 

    constructor(private router : Router){
    
        if(!this.url){
            this.url = this.router.url.split("/")
            this.url.shift();
        }
    }
}
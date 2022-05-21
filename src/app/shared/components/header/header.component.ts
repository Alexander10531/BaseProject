import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';
import { componentesRedireccion } from '../../../core/util/interfaces';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

    initials! : string;
    statusSide : boolean = false; 
    faBars : IconDefinition = faBars;
    @Input("name") userName! : string;
    @Input("componentsDropdown") componentsDropdown : componentesRedireccion[] = [];

    constructor(){

        JSON.parse(localStorage.getItem("sidebarElem")!);
    
    }

    ngOnInit(): void {

        if(this.userName){
            this.initials = this.getInitials(this.userName);
        }else{
            this.userName = `${ localStorage.getItem("firstName") } ${ localStorage.getItem("lastName") }`
            this.initials = this.getInitials(this.userName);
        }
    
    }

    getInitials(name : string) : string{
        
        let userName = this.userName.split(" ")
        return userName[0][0] + userName[1][0];
    
    }

}
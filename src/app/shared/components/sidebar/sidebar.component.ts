import { Input } from '@angular/core';
import { Inject } from '@angular/core';
import { Output } from '@angular/core';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { EventEmitter } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBoxes } from '@fortawesome/free-solid-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { componentesSidebar } from '../../../core/util/interfaces';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

    initials! : string;
    @Input("name") userName! : string;
    @Output() newStatusEvent = new EventEmitter<boolean>();

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private renderer : Renderer2){

            let values : componentesSidebar[] = JSON.parse(localStorage.getItem("sidebarElem")!);
            (JSON.parse(localStorage.getItem("sidebarElem")!))


    }

    ngOnInit(): void {
        
        this.initials = this.getInitials();
        this.renderer.addClass(this.document.body, "hidden");
    
    }
    
    updateStatus(){

        this.newStatusEvent.emit(false);
    
    }

    getInitials(){

        let userName = this.userName.split(" ")
        return userName[0][0] + userName[1][0];

    }

    ngOnDestroy(){

        this.renderer.removeClass(this.document.body, "hidden");

    }

    get getSideBarElements() : componentesSidebar[]{

        return [
            {
                titulo: "Home", 
                iconoFontAwesome: faHome,
                url: ['/home']
            },
            ...JSON.parse(localStorage.getItem("sidebarElem")!) 
        ];

    }

}
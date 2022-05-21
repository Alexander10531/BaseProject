import { Input, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { elementNav } from 'src/app/core/util/interfaces';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHandHolding } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit{

    @Input() dataNavigation! : elementNav[];
    @Output() valueClicked = new EventEmitter<elementNav>();  
    actualIndex! : number; 
    faStar : IconDefinition = faStar;
    faHandHolding : IconDefinition = faHandHolding;
    faUser : IconDefinition = faUser;
    constructor(){}

    ngOnInit(){

        for(let i = 0; i < this.dataNavigation.length; i++){

            if(this.dataNavigation[i].active == true){

                this.actualIndex = i; 

            }

        }

        if(!this.actualIndex){

            this.actualIndex = 0; 

        }

    }    

    doFunction(objectValue : any, index : number){

        if(this.actualIndex != index){

            this.dataNavigation[index].active = true; 
            this.dataNavigation[this.actualIndex].active = false; 
            this.actualIndex = index;
            this.valueClicked.emit(objectValue);

        }

    }

}

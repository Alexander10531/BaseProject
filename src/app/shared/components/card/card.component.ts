import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent{

    @Input() title! : String;
    @Input() content! : String;

    constructor(){
    }

}
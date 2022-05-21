import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component } from '@angular/core';
import { buttonTable } from 'src/app/core/util/interfaces';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { HttpUserService } from 'src/app/core/services/userService/http-user.service';
import { contentText } from 'src/app/core/util/interfaces';
import { iconVar } from 'src/app/core/util/interfaces';

@Component({
  selector: 'app-modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.css']
})
export class ModalMessageComponent{

    faTimesCircle = faTimesCircle;
    @Input() icon! : iconVar;
    @Input() content! : contentText; 
    @Input() button! : buttonTable[];
    @Output() buttonClicked : EventEmitter<buttonTable> = new EventEmitter<buttonTable>();

    constructor(private userService : HttpUserService){

    }

    clickButton(i : buttonTable){

        this.buttonClicked.emit(i);

    }

}
import { Component } from '@angular/core';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { HttpUserService } from 'src/app/core/services/userService/http-user.service';

@Component({
  selector: 'app-no-connection',
  templateUrl: './no-connection.component.html',
  styleUrls: ['./no-connection.component.css']
})
export class NoConnectionComponent {

    faWifi : IconDefinition = faWifi;
    constructor(private userService : HttpUserService){ 
        this.userService.sendEmailError().subscribe((res : any) => {
        })
    }
}
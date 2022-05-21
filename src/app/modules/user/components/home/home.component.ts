import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpUserService } from 'src/app/core/services/userService/http-user.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
    
    cardRequest!: any;
    errorRequest: boolean = false;

    constructor(private userService:HttpUserService){
    }

    ngOnInit(): void {
        this.userService.getTeams().subscribe((res: any) => {
            
            this.cardRequest = res;

        },
        ((err: any) => {

          this.errorRequest = true;

        })
      )
    }

}

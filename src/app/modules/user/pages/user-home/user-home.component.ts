import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { contentText } from '../../../../core/util/interfaces';
import { iconVar } from '../../../../core/util/interfaces';
import { errorHandler } from '../../../../core/util/interfaces';
import { buttonTable } from '../../../../core/util/interfaces';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { componentesRedireccion } from '../../../../core/util/interfaces';
import { HttpUserService } from 'src/app/core/services/userService/http-user.service';


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit{

    errorJwt : errorHandler = {
        existError : false,
    };
    userName! : string;
    elementsDropdown : componentesRedireccion[] = [
        {
            text : "Mi Perfil",
            url : ["/home/profile"],
            functionComponent : () => console.log("Mi perfil funcion")
        }, 
        {
            text : "Cerrar sesion",
            url : ["/"], 
            functionComponent : () => {

                this.userService.closeSession(); 

            }
        }
    ]

    constructor(
        private userService : HttpUserService, 
        private router : Router){
            
        }

    ngOnInit(){
        
        this.userName = this.userService.getNameUser();
        this.userService.getErrorJwt().subscribe((res) => {
            
            this.errorJwt = res; 
            
        })

    }

    buttonClicked(event : buttonTable){

        if(event.callbackFunc.functionExec){

            event.callbackFunc.functionExec();
        
        }

    }

    get getIcon() : iconVar{

        return {
            icon : faTimesCircle, 
            classes : ['errorValue']
        }

    }
    
    get getContent() : contentText{

        return { 
            text : 'Su sesión ha expirado, se requiere que vuelva a iniciar sesión, por favor.', 
            classes : ['errorValue', 'main']
        }

    }

    get getButtonModal() : buttonTable[]{

        return [
            {
                name : "Aceptar", 
                classes : ['button', 'button-light', 'main', 'text-start'], 
                callbackFunc : {
                    callbackName : "redirect",
                    functionExec : () => {
                        
                        this.userService.closeSession(); 
                        this.router.navigate(["/"]);
    
                    }  
                }
            }
        ]

    }

}
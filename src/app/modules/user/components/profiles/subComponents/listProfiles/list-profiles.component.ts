import { Inject } from '@angular/core';
import { Component } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { QueryList } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ElementRef } from '@angular/core';
import { ViewChildren } from '@angular/core';
import { trElement } from 'src/app/core/util/interfaces';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { buttonCircle } from 'src/app/core/util/interfaces';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { HttpUserService } from 'src/app/core/services/userService/http-user.service';


@Component({
  selector: 'app-list-profiles',
  templateUrl: './list-profiles.component.html',
  styleUrls: ['./list-profiles.component.css']
})
export class ListProfilesComponent {

    data: trElement[] = [];
    screen : any[] = [];
    grants : any[] = [];
    descripcion! : string;
    nombrePerfil! : string;
    listaPerfiles! : any[];
    listaPermiso : number[] = [];
    listaPantalla : number[] =[];
    faPen : IconDefinition = faPen;
    faSortUp : IconDefinition = faSortUp;
    public modalProp : any = {
        state : true,
        title : "Crear Perfil"
    };
    @ViewChildren("checkGrants") checks!: QueryList<ElementRef>;

    constructor(

        @Inject(DOCUMENT) private document: Document,
        private httpUserService : HttpUserService, 
        private renderer : Renderer2){
        this.initialState();
    
    }

    changePosition(index : number){
        this.screen[index][1] = !this.screen[index][1];
    }

    setModal(newStatus : boolean, dataProfile? : any){
        
        this.modalProp.state = newStatus; 
        if(dataProfile){
            
            this.modalProp.title = "Modificar perfil";
            this.nombrePerfil = dataProfile["nombre"];
            this.descripcion = dataProfile["descripcion"];
        
        }else{
            
            this.modalProp.title = "Crear perfil";
        
        }
        
        if(!this.modalProp.state){

            this.renderer.addClass(this.document.body, "hidden")
        
        }else{
        
            this.renderer.removeClass(this.document.body, "hidden")
        
        }
    
    }

    initialState(){
        
        this.httpUserService.getProfiles().subscribe(( res ) => {
            this.listaPerfiles = res["Object"]["perfiles"]
            res['Object']['perfiles'].forEach((e : any) => {
                this.data.push(
                    {
                        dataElements : [
                            {
                                text : e['nombre'],
                                url : [e['perfilId']]
                            }, 
                            {
                                text: e['estado']['nombre'],
                            }
                        ],
                        valueObject : e
                    }
                )
            });

            res['Object']['pantalla'].forEach((e : any)=> {
                this.screen.push([
                    e['nombre'], 
                    false, 
                    e['pantallaId']
                ])
            })
            res['Object']['permisos'].forEach((e : any)=> {
                this.grants.push(
                    [
                        e['nombre'],
                        e['permisoId'] 
                    ]
                );
            })
        })
    }

    getValueGrantsProfiles(){

        const regexNameProfile = /^[A-z]+$/gm;
        let oldScreen = this.checks['_results'][0].nativeElement.value 
        
        for(let i = 0; i < this.checks.length; i++){
            
            if(this.checks['_results'][i].nativeElement.checked){
                
                let values = this.checks['_results'][i].nativeElement.value.split("_");
                let actualScreen = values[0];
                
                if(actualScreen != oldScreen){
                    
                    oldScreen = actualScreen;
                    this.listaPantalla.push(parseInt(actualScreen));
                    this.listaPermiso.push(-1);          
                }

                this.listaPermiso.push(parseInt(values[1]));
            }
        }
        
        if(regexNameProfile.exec(this.nombrePerfil)){
            
            this.listaPermiso.shift();
            let request = {
                "nombrePerfil" : this.nombrePerfil,
                "descripcion" : this.descripcion, 
                "listaPantalla" : this.listaPantalla, 
                "listaPermiso" : this.listaPermiso
            }

            this.httpUserService.insertProfile(request).subscribe((res) => {
                this.resetValues();
                this.setModal(true);
            })

        }
    }

    resetValues(){
        console.log(this.screen);
        for(let i = 0; i < this.checks['_results'].length; i++){
            
            this.checks['_results'][i].nativeElement.checked = false; 

        }
        for(let i = 0; i < this.screen.length; i++){

            this.screen[i][1] = false; 

        }


    }

    updateProfile(perfilId : Number){

        let perfil = this.listaPerfiles.find((e : any) => e["perfilId"] == perfilId);
        this.modalProp.title = "Actualizar perfil";
        this.setModal(false, perfil);

    }

    executeFunction(object : any){
        
        switch (object["callbackName"]) {

            case "updateProfile":
                console.log(object["valueObject"]);
                this.setModal(false)
            break;
            case "createProfile":
                this.setModal(false);
                break; 
            default:
                break;

        }

    }

    get getButtonCircle() : buttonCircle[] {

        return [
            {
                icon : faPlus, 
                classes : "create-action-button", 
                callbackFunc : {
                    callbackName: "createProfile", 
                    parameters : [false]
                }
            }
        ]

    }

    get getButtonRegister(){

        return [
            {
                icon : faPen, 
                callbackFunc : {
                    callbackName: "updateProfile", 
                }
            }, 
        ]

    }

    get getButton(){

        return [
            {
                name : "Boton 1", 
                classes : "create-action-button", 
                callbackFunc : {
                    callbackName : "", 
                }
            },
            {
                name : "Boton 2", 
                classes : "create-action-button", 
                callbackFunc : {
                    callbackName : "", 
                }
            }
        ]

    }

}

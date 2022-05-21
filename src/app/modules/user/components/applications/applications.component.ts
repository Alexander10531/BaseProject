import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { trElement } from 'src/app/core/util/interfaces';
import { ApplicationService } from 'src/app/core/services/applicationService/application.service';
import { faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit{

    dataApplications : trElement[] = [];
    errorRequest : boolean = false; 
    constructor(private appServices : ApplicationService){}
    
    ngOnInit(): void {

        this.appServices.getApplication().subscribe((res) =>{
            
            for(let i = 0; i < res.length; i++){

                this.dataApplications.push({
                    dataElements : [
                        {
                            text : res[i]['aplicacionId'], 
                            url : ["/home"]
                        }, 
                        {
                            text : res[i]['nombre'], 
                            url : ["/home"]
                        },
                        {
                            text : res[i].estadoId.nombre
                        },
                        {
                            text : res[i].tipoAplicacionId.nombre
                        },
                        {
                            text : res[i]['nombreproducto']
                        },
                        {
                            text : res[i]['fechaInicioDesarrollo']
                        },
                        {
                            text : res[i]['nombrelider']
                        },
                    ],
                    valueObject : res[i]
                })
            }
        console.log(this.dataApplications);
        }, 
        (err : any) => {

            this.errorRequest = true; 
            console.error(err);

        })
    
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
    
}
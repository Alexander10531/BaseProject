import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trElement } from 'src/app/core/util/interfaces';
import { faBoxes } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { PerfilesService } from 'src/app/core/services/profileService/perfiles.service';
 
@Component({
  selector: 'app-details-profiles',
  templateUrl: './details-profiles.component.html',
  styleUrls: ['./details-profiles.component.css']
})
export class DetailsProfilesComponent{

    data : any;
    dataRes : trElement[] = [];
    faUser : IconDefinition = faUser; 
    faBoxes : IconDefinition = faBoxes; 

    constructor(
        private perfilesService : PerfilesService, 
        private rutaActiva : ActivatedRoute){
        this.rutaActiva.params.subscribe((res) => {
            this.perfilesService.getProfileDetails(res["profileId"]).subscribe((resProfile) => {
                this.data = resProfile["Object"]; 
                this.defineUsers(this.data["Personas"]);

            })

        })
    }

    changeData({nameFunction} : any){

        switch (nameFunction) {
            case 'defineUsers':
                this.defineUsers(this.data['Personas']);
                break;
            case 'defineMain':
                this.defineMain(this.data['Perfil']);
                break;             
            default:
                break;
        }

    }

    defineUsers(value : any){

        this.dataRes = [];
        for(let i = 0; i < value.length; i++){
            
            this.dataRes.push({dataElements : [{ text : "Id Persona"},{ text : value[i]["personaId"].toString() } ]});
            this.dataRes.push({dataElements : [{ text : "Codigo SAP"},{ text : value[i]["codigoSap"] } ]});
            this.dataRes.push({dataElements : [{ text : "Primer nombre"},{ text : value[i]["primerNombre"] } ]});
            this.dataRes.push({dataElements : [{ text : "Primer Apellido"},{ text : value[i]["primerApellido"] } ]});
            this.dataRes.push({dataElements : [{ text : "No° de identidad"},{ text : value[i]["identidad"] } ]});
            this.dataRes.push({dataElements : [{ text : "Estado"},{ text : value[i]["estado"]["nombre"] } ]});
        
        }

    }

    defineMain(value : any){
        
        this.dataRes = [];
        this.dataRes.push({dataElements : [{text : "Id Perfil"},{text : value["perfilId"].toString() } ]});
        this.dataRes.push({dataElements : [{text : "Nombre"},{text : value["nombre"] } ]});
        this.dataRes.push({dataElements : [{text : "Descripcion"},{text : value["descripcion"] } ]});
        this.dataRes.push({dataElements : [{text : "Id Estado"},{text : value["estado"]["tipoId"].toString() } ]});
        this.dataRes.push({dataElements : [{text : "Estado"},{text : value["estado"]["nombre"] } ]});
    
    }

    get getNav() : any {

        return [ 
            {
                text : "Usuarios", 
                nameFunction : "defineUsers",
                icon : faUser,
                active : true
            }
        ];

    }

}
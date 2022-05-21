import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBoxes } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { HttpUserService } from 'src/app/core/services/userService/http-user.service';
import { Persona } from 'src/app/core/util/classes/Persona/persona';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{
    
    formPerson : any;
    faPen : IconDefinition = faPen;
    faUser: IconDefinition = faUser;
    faBoxes: IconDefinition = faBoxes;
    regexName = new RegExp('^[A-z]{3,}$');

    constructor(
        private formBuider : FormBuilder, 
        private userService : HttpUserService){
        this.formPerson = this.formBuider.group({
            codigoSap:[
                "", 
                Validators.required,
            ],
            primerNombre:[
                "",
                [
                    Validators.required, 
                    Validators.pattern(this.regexName)
                ]
            ],
            segundoNombre:[
                "", 
                [
                    Validators.pattern(this.regexName),
                ]
            ],
            primerApellido:[
                "", 
                [
                    Validators.required, 
                    Validators.pattern(this.regexName),
                ]
            ],
            segundoApellido:[
                "", 
                [
                    Validators.pattern(this.regexName)
                ]
            ],
            fechaNacimiento:[
                "", 
                [
                    Validators.required,
                    Validators.pattern("^\\d{1,2}\\/\\d{1,2}\\/\\d{4}$")
                ]
            ],
            identidad:[
                "", 
                [
                    Validators.required,
                    Validators.pattern("^\\d{13}$")
                ]
            ],
            direccion:[
                "", 
            ],
        })
        this.userService.getInfoUser().subscribe((res) => {
            if(res['codigoSap']){
                this.formPerson.get('codigoSap').setValue(res['codigoSap']);
                this.formPerson.get('codigoSap').disable();
            }
            this.formPerson.get('primerNombre').setValue(res['primerNombre']);
            this.formPerson.get('primerApellido').setValue(res['primerApellido']);
            this.formPerson.get('fechaNacimiento').setValue(res['fechaNacimiento']);
            this.formPerson.get('identidad').setValue(res['identidad']);
            if(res['segundoNombre']){
                this.formPerson.get('segundoNombre').setValue(res['segundoNombre']);
            }
            if(res['segundoApellido']){
                this.formPerson.get('segundoApellido').setValue(res['segundoApellido']);
            }
            if(res['direccion']){
                this.formPerson.get('direccion').setValue(res['direccion']);
            }
        }
        )
    }

    initializatePersona() : Persona{

        let persona : Persona = new Persona();
        persona.setEstado(100);
        persona.setCodigoSap(JSON.stringify(Math.floor(Math.random() * 10)));
        persona.setIdentidad(this.formPerson.controls.identidad.value);
        persona.setFechaIngreso("05/10/1997");
        if(this.formPerson.controls.direccion.value != ""){
            persona.setDireccion(this.formPerson.controls.direccion.value);
        }
        if(this.formPerson.controls.segundoNombre.value != ""){
            persona.setSegundoNombre(this.formPerson.controls.segundoNombre.value);
        }
        if(this.formPerson.controls.segundoApellido.value != ""){
            persona.setSegundoApellido(this.formPerson.controls.segundoApellido.value);
        }
        persona.setPrimerNombre(this.formPerson.controls.primerNombre.value);
        persona.setPrimerApellido(this.formPerson.controls.primerApellido.value);
        persona.setFechaNacimiento(this.formPerson.controls.fechaNacimiento.value);
        return persona; 

    }

    updatePerson(){

        if(this.formPerson.valid){
            
            this.userService.insertUser(this.initializatePersona()).subscribe((res) => {
            })

        }else{

            console.log("_________________________");
            console.log("No se esta enviando la informacion");
            console.log("_________________________");
        
        }

    }

}
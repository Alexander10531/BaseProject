import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface componentesRedireccion{

    text: string, 
    url: string[] | string, 
    functionComponent? : Function,

}

export interface persona {

    estado: string,
    codigoSap: string, 
    identidad: string, 
    personaId: number;
    direccion?: string, 
    primerNombre: string, 
    observacion?: string, 
    fechaIngreso: string, 
    segundoNombre?: string, 
    primerApellido: string, 
    fechaNacimiento: string, 
    segundoApellido?: string, 
    fechaFinalizacion?: string, 

}

export interface equipo {

    nombre : string, 
    estadoId : number, 
    equipoId : number,
    descripcion? : string, 
    estadoRegistro : number, 

}

export interface componentesSidebar{

    url?: string[], 
    titulo: string, 
    iconoFontAwesome?: IconDefinition,
    subComponentes?: componentesRedireccion[],

}

export interface buttonTable{

    name : string, 
    classes : string | string[], 
    callbackFunc : {
        callbackName : string, 
        parameters? : any[], 
        functionExec? : Function,
    }

}

export interface buttonCircle{

    icon : IconDefinition, 
    classes : string, 
    callbackFunc : {
        callbackName : string, 
        parameters : any[]
    }
    
}

export interface thElement{

    text : string, 
    url? : string | (string | number)[]

} 

export interface trElement{

    dataElements : thElement[], 
    valueObject? : Object

}

export interface elementNav{

    text : String, 
    nameFunction? : String, 
    icon : IconDefinition,
    active? : boolean,  

}

export interface errorHandler{

    existError : boolean,
    message? : string, 
    code? : number,

}

export interface contentText{

    text : string, 
    classes? : string[]

}

export interface iconVar{

    icon : IconDefinition, 
    classes : string | string[]

}
export class Persona {

    public estado!: Object | null;
    public codigoSap!: String;
    public identidad!: String;
    public direccion!: String;
    public observacion!: String; 
    public primerNombre!: String;
    public fechaIngreso!: String; 
    public segundoNombre!: String; 
    public primerApellido!: String; 
    public segundoApellido!: String;
    public fechaNacimiento!: String;

    constructor(){}

    public getestado() : Object | null{
        return this.estado
    }

    public getcodigoSap() : String{
        return this.codigoSap
    }

    public getidentidad() : String{
        return this.identidad
    }

    public getdireccion() : String{
        return this.direccion
    }

    public getobservacion() : String{
        return this.observacion
    }

    public getprimerNombre() : String{
        return this.primerNombre
    }

    public getfechaIngreso() : String{
        return this.fechaIngreso
    }

    public getsegundoNombre() : String{
        return this.segundoNombre
    }

    public getprimerApellido() : String{
        return this.primerApellido
    }

    public getsegundoApellido() : String{
        return this.segundoApellido
    }

    public getfechaNacimiento() : String{
        return this.fechaNacimiento
    }

    public setEstado(estado : Number | null){
        this.estado = {
            tipoId : estado
        };
    }

    public setCodigoSap(codigoSap : String){
        this.codigoSap = codigoSap;
    }

    public setIdentidad(identidad : String){
        this.identidad = identidad;
    }

    public setDireccion(direccion : String){
        this.direccion = direccion;
    }

    public setObservacion(observacion : String){
        this.observacion = observacion;
    }

    public setPrimerNombre(primerNombre : String){
        this.primerNombre = primerNombre;
    }

    public setFechaIngreso(fechaIngreso : String){
        this.fechaIngreso = fechaIngreso;
    }

    public setSegundoNombre(segundoNombre : String){
        this.segundoNombre = segundoNombre;
    }

    public setPrimerApellido(primerApellido : String){
        this.primerApellido = primerApellido;
    }

    public setSegundoApellido(segundoApellido : String){
        this.segundoApellido = segundoApellido;
    }

    public setFechaNacimiento(fechaNacimiento : String){
        this.fechaNacimiento = fechaNacimiento;
    }


}
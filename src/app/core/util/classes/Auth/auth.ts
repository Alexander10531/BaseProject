export class Auth {

    public email! : String;
    public password! : String;    

    constructor(){}

    public setemail(newEmail : String) : void{
        
        this.email = newEmail;
    
    }

    public setpassword(newPassword : String) : void{
        
        this.password = newPassword;
    
    }

    public getemail() : String{
    
        return this.email;
    
    }

    public getpassword() : String{
    
        return this.password;
    
    }    

}
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Auth } from 'src/app/core/util/classes/Auth/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
    
    formLogin: any;
    errorRequest : String | undefined; 

    constructor(
        private formBuilder : FormBuilder,
        private router : Router, 
        ){

            this.formLogin = this.formBuilder.group({
            email : [
                "", 
                [
                    Validators.required, 
                    Validators.pattern("^[\\w\\.]+@[\\w-]+(\\.[a-zA-Z0-9-]+){1,}$")
                ]
            ], 
            password : [
                "", 
                [
                    Validators.required,
                    Validators.minLength(20),
                ]
            ]
        })
        
    }

    get passwordIsValid() : boolean{
        return this.formLogin.controls.password.invalid && this.formLogin.controls.password.dirty
    }

    defineLoginData() : Auth{

        let auth : Auth = new Auth();
        auth.setemail(this.formLogin.controls.email.value);
        auth.setpassword(this.formLogin.controls.password.value);
        return auth;
    }

    submitLogin(){

        this.router.navigate(["/home"]);

    }

}
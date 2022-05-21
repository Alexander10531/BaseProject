import { componentesSidebar } from "../interfaces";

export function defineSidebarInfo(parametros : any){

    let sidebarElem : any[] = [];

    for(let i = 0; i < parametros.length; i++){

        let sideElem : any; 

        if(parametros[i]["categoriaId"]["categoriaId"] == "urlMas"){
            
            sideElem = {
                titulo : parametros[i]['nombre'],
                url : parametros[i]["valorParametro"].split("/"),
                parametroKey : parametros[i]["parametroKey"]
            }
            
        }
        
        if(sideElem!){

            sidebarElem.push(sideElem);

        }

    }

    for(let i = 0; i < sidebarElem.length; i++){

        delete(sidebarElem[i]["parametroKey"]);
        
    }

    localStorage.setItem("sidebarElem", JSON.stringify(sidebarElem));

}
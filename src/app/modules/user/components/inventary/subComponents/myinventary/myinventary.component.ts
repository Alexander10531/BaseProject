import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBoxes } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { InventarioService } from 'src/app/core/services/inventarioService/inventario.service';
import { BreadcrumbModule } from 'src/app/shared/components/breadcrumb/breadcrumb.module';
import { trElement } from 'src/app/core/util/interfaces';

@Component({
  selector: 'app-myinventary',
  templateUrl: './myinventary.component.html',
  styleUrls: ['./myinventary.component.css']
})
export class MyinventaryComponent implements OnInit {
    faUser: IconDefinition = faUser;
    faBoxes: IconDefinition = faBoxes;



    data:  trElement[] = [];
    errorRequest: boolean = false;

    constructor(private inventaryService: InventarioService) {
    }
    ngOnInit(): void {
        this.inventaryService.getInventario().subscribe((res: any) => {
            let valueTables: any[] = [], valueTables1: any[] = [];
            
            for(let i = 0; i < res.length; i++){
 
                this.data.push({
                    dataElements : [
                        {
                            text : res[i].inventarioId.toString() 
                        },
                        {
                            text : res[i].tipoId.nombre, 
                        },
                        {
                            text : res[i].numeroSerie, 
                             url : [res[i].inventarioId]
                        }, 
                        {
                            text : res[i].numeroInventario,
                        },
                        {
                            text : res[i].marca
                        },
                        {
                            text : res[i].estadoId.nombre
                        },
                    ],
                    valueObject : res[i]
                })
            }
        console.log(this.data);
        },
            ((err: any) => {
                this.errorRequest = true;
            })
        )
    }

}

import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { trElement } from 'src/app/core/util/interfaces';
import { InventarioService } from 'src/app/core/services/inventarioService/inventario.service';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { BreadcrumbModule } from 'src/app/shared/components/breadcrumb/breadcrumb.module';

@Component({
    selector: 'app-inventary',
    templateUrl: './inventary.component.html',
    styleUrls: ['./inventary.component.css'] 
})
export class InventaryComponent implements OnInit {


    data:  trElement[] = [];
    errorRequest: boolean = false;

    constructor(private inventaryService: InventarioService) {
    }
    ngOnInit(): void {
        this.inventaryService.getInventarioEquipo().subscribe((res: any) => {
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
                        {
                            text : res[i].nombreUsuario
                        },
                        {
                            text : res[i].nombreEquipo
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
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trElement } from 'src/app/core/util/interfaces';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { InventarioService } from 'src/app/core/services/inventarioService/inventario.service';


@Component({
    selector: 'app-inventary-details',
    templateUrl: './inventary-details.component.html',
    styleUrls: ['./inventary-details.component.css']
})
export class InventaryDetailsComponent {


    data!: trElement[];
    data2: any;
    errorRequest: boolean = false;

    constructor(

        private inventarioService: InventarioService,
        private rutaActiva: ActivatedRoute) {
        this.rutaActiva.params.subscribe((res) => {
            this.inventarioService.getInventarioDetails(res['inventarioId']).subscribe((resInv) => {

                this.data = []

                let valueTables: any[]
                console.log(resInv);

                this.data.push({
                    dataElements: [
                        { text: "Numero Serie" },
                        { text: resInv["Object"]["InventarioDetails"][0]['numeroSerie'] }]
                });
                this.data.push({
                    dataElements: [
                        { text: "Numero Inventario" },
                        { text: resInv["Object"]["InventarioDetails"][0]['numeroInventario'] }]
                });
                this.data.push({
                    dataElements: [
                        { text: "Marca" },
                        { text: resInv["Object"]["InventarioDetails"][0]['marca'] }]
                });
                this.data.push({
                    dataElements: [
                        { text: "Area" },
                        { text: resInv["Object"]["InventarioDetails"][0]['areaId']['nombre'] }]
                });
                this.data.push({
                    dataElements: [
                        { text: "Tipo" },
                        { text: resInv["Object"]["InventarioDetails"][0]['tipoId']['nombre'] }]
                });
                this.data.push({
                    dataElements: [
                        { text: "Descripcion" },
                        { text: resInv["Object"]["InventarioDetails"][0]['descripcion'] }]
                });
                this.data.push({
                    dataElements: [
                        { text: "Modelo" },
                        { text: resInv["Object"]["InventarioDetails"][0]['modelo'] }]
                });
                this.data.push({
                    dataElements: [
                        { text: "Memoria RAM" },
                        { text: resInv["Object"]["InventarioDetails"][0]['memoriaRam']['nombre'] }]
                });
                this.data.push({
                    dataElements: [
                        { text: "Disco Duro" },
                        { text: resInv["Object"]["InventarioDetails"][0]['tipoDiscoDuro']['nombre'] }]
                });
                this.data.push({
                    dataElements: [
                        { text: "Sistema Operativo" },
                        { text: resInv["Object"]["InventarioDetails"][0]['sistemaOperativo'] }]
                });
                this.data.push({
                    dataElements: [
                        { text: "Carta Responsiva" },
                        { text: resInv["Object"]["InventarioDetails"][0]['documento'] }]
                });
                this.data.push({
                    dataElements: [
                        { text: "Estado" },
                        { text: resInv["Object"]["InventarioDetails"][0]['estadoId']['nombre'] }]
                });
                this.data.push({
                    dataElements: [
                        { text: "Estado Registro" },
                        { text: resInv["Object"]["InventarioDetails"][0]['estadoRegistroId']['nombre'] }]
                });

            })
        });
    }

}

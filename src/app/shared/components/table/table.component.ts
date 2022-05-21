import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { trElement } from 'src/app/core/util/interfaces';
import { thElement } from 'src/app/core/util/interfaces';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnChanges{

    searchValue! : String; 
    actualIndex : number = 0;
    @Input() data! : trElement[];
    @Input() buttons : any[] = [];
    @Input() headers! : string[];
    actualData : thElement[][] = [];
    @Input() pagination : number = 6;
    faSync : IconDefinition = faSync;
    @Input() actionButtons : any[] = [];
    faFilter : IconDefinition = faFilter;
    faFrown : IconDefinition = faFrown;
    @Input() buttonRegister : any[] = [];
    @Input() paginationShow : boolean = true; 
    @Output() buttonFunction = new EventEmitter<Object>(); 

    ngOnChanges(changes: SimpleChanges): void {

        if(changes["data"]){
            this.defineActualData();
        }

    }

    ngOnInit(){ 
        this.defineActualData();
    }

    changeData(moveValue : number){

        if(this.actualIndex + moveValue < 0)
            return

        if(this.actualIndex + moveValue == Math.ceil(this.data.length / this.pagination))
            return
            
        this.actualIndex = this.actualIndex + moveValue;
        this.defineActualData(this.actualIndex);

    }

    returnFunction(func : Object, parameters? : any, index? : number){
        
        if(index != null){

            Object.assign(func, this.data[index]);

        }

        if(parameters){

            Object.assign(func, parameters)

        }
        this.buttonFunction.emit(func);
    
    }

    searchData(){

        const regex = new RegExp(`${this.searchValue}`, "i");
        this.actualData = [];
        for(let i = 0; i < this.data.length; i++){
            for(let j = 0; j < this.data[i].dataElements.length; j++){
                if(regex.exec(this.data[i].dataElements[j].text)){
                    
                    this.actualData.push(this.data[i].dataElements);
                    break; 
                
                }
            }
        }
        this.actualData = this.actualData.slice(0,this.pagination);
    }
    
    defineActualData(start = 0){

        let dataLength : Number = (start * this.pagination) + this.pagination;
        this.actualData = []; 
        if((start * this.pagination) + this.pagination > this.data.length){
            dataLength = this.data.length; 
        }

        for(let i = (start * this.pagination); i < dataLength; i++){
            let row : thElement[] = [];
            for(let j = 0; j < this.data[i].dataElements.length; j++){
                row.push(this.data[i].dataElements[j]);
            }
            this.actualData.push(row);        
        }
    }
    
    changeValue(event : any){

        event = parseInt(event);
        if(!event){
            
            this.pagination = 7; 
            return;
            
        }
        this.pagination = event; 


    }

}
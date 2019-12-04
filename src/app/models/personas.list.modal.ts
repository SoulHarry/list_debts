import { DeudasItem } from './deudas.item.modal';

export class Personas{

    nombre: string;
    deudas: DeudasItem[];

    constructor(nombre: string){

        this.nombre = nombre;
        this.deudas = [];   
    }

}
import { DeudasItem } from './deudas.item.modal';

export class Personas{

    id: number;
    nombre: string;
    deudas: DeudasItem[];
    creadaEl: Date;

    constructor(nombre: string){

        this.id = new Date().getTime();
        this.nombre = nombre;
        this.deudas = [];
        this.creadaEl = new Date();
        
    }

}
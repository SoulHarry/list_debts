export class DeudasItem{

    id:number
    descripcionDeuda: string
    valor: number
    creado: Date
    

    constructor(descripcionDeuda: string, valor: number){
        this.descripcionDeuda = descripcionDeuda;
        this.valor = valor
        this.creado = new Date();
        
    }
}
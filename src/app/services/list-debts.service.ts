import { Injectable } from '@angular/core';
import { Personas } from '../models/personas.list.modal';

@Injectable({
  providedIn: 'root'
})
export class ListDebtsService {
  personas: Personas[] = [];

  constructor() {
    const lista1 = new Personas('Harold');
    const lista2 = new Personas('Sebas');

    this.personas.push(lista1,lista2);
  }

  crearPersona(persona: string){
    const nuevaPersona = new Personas(persona);

    this.personas.push(nuevaPersona);
  }
}

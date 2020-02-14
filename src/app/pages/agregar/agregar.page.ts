import { Component, OnInit, ɵConsole } from '@angular/core';
import { ListDebtsService } from 'src/app/services/list-debts.service';
import { ActivatedRoute } from '@angular/router';
import { DeudasItem } from 'src/app/models/deudas.item.modal';
import { Personas } from 'src/app/models/personas.list.modal';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  persona: Personas;
  nombreDeuda: string;
  valorDeuda: number;
  listaDeudas = []; 

  constructor(private listDebtService : ListDebtsService, private router: ActivatedRoute) {

    const personaId = router.snapshot.paramMap.get('id');
    console.log(personaId);
    this.persona = listDebtService.getListaPersonas(personaId);
    
   }

  ngOnInit() {
  }

  agregarDeuda(){
    if(this.nombreDeuda.length === 0){
      return;
    }

    const newDebt = new DeudasItem( this.nombreDeuda, this.valorDeuda );
    
    this.persona.deudas.push(newDebt);
  }

}

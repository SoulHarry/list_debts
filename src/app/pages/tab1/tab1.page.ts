import { Component } from '@angular/core';
import { ListDebtsService } from 'src/app/services/list-debts.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public listDebtService: ListDebtsService, private router :Router, private alertController: AlertController) {
    

  }

  async agregarPersona(){
    //this.router.navigateByUrl('/tabs/tab1/agregar');
    const alert = await this.alertController.create({
      header: 'Nueva Persona',
      message: 'Aqui puedes agregar una nueva persona a la lista',
      inputs: [{
        name: 'persona',
        type: 'text',
        placeholder: 'Nombre de la persona'

      }],
      buttons: [{
        text: 'Cancelar',
        role: 'cancel'
      },{
        text: 'Crear',
        handler: (data) =>{this.listDebtService.crearPersona(data.persona)}
      }]
    });

    await alert.present();

  }

}

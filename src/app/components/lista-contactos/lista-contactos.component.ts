import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IContacto } from 'src/app/models/contacto.interfaces';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss']
})
export class ListaContactosComponent implements OnInit,OnDestroy {
  //Creamos una lista de contactos
  listaContactos: IContacto[] = [];
  contactoSelecionado: IContacto | undefined;

  //subscribimos al servicio
  subscription:Subscription | undefined;

  //Inyectamos el servicio de contactos en el constructor
  constructor(private contactoService: ContactService) { }
;

  ngOnInit(): void {
    //Obtener la lista de contactos que nos brinda el servicio
    this.contactoService.obtenerContactos().then((contactos: IContacto[]) => {
      this.listaContactos = contactos;
    })
      .catch((error) => {
        console.error(`Error al obtener los contactos: ${error}`);
      })
      .finally(() => {
        console.log('Finalizó la carga de contactos');
      });

  }
  obtenerContacto(id: number) {
    //Obtener el contacto que nos brinda el servicio
    this.subscription=this.contactoService.obtenerContactoPorId(id)?.subscribe((contacto: IContacto) =>
      this.contactoSelecionado = contacto );
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}

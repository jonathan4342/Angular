import { Injectable } from '@angular/core';
//importamos la lista de contactos MOCKS
import { CONTACTOS } from '../mocks/contactos.mocks';
import { IContacto } from '../models/contacto.interfaces';
//importamos Observable de la libreria rxjs
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  obtenerContactos():Promise<IContacto[]>{
    return Promise.resolve(CONTACTOS);
  }
  obtenerContactoPorId(id:number): Observable<IContacto> | undefined{
    //buscamos el contacto por id dentro de la lista de contactos mockeados
    const contacto=CONTACTOS.find((contacto:IContacto)=>contacto.id===id);

    //Creamos un observable

    let observable:Observable<IContacto> =new Observable (observer=>{
      observer.next(contacto);//Emitir un valor a todo componente que esté suscrito
      observer.complete();//Indicar que se terminó de emitir los datos
    })

    if(contacto){
      return observable;
    }
    else{
      return;
    }
  }
}

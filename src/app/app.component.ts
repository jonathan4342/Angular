import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
  title = 'HolaMundo';
  usuario='juan';

  recibirMensajeDelHijo(mensaje:string){
    alert(mensaje);
  }
}

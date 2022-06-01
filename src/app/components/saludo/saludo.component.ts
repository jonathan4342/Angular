import { Component, OnInit, OnDestroy, Input,Output, EventEmitter,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss'],
  inputs:["nombre"]
})
export class SaludoComponent implements OnInit, OnDestroy,OnChanges{
// Recibimos el valor desde el componente padre
  @Input() nombre: string = 'Juan';
// Recibimos el valor desde el componente padre para emitir un evento
  @Output() mensajeEmitter: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }



  ngOnInit(): void {
    //instrucciones previas a la renderizacion del componente
    console.log('SaludoComponent cargado');
  }
  // Ejemplo para gestionar un evento tipo click en el Dom
  enviarMensajeAlpadre(): void {
    this.mensajeEmitter.emit(`Hola, ${this.nombre}. mensaje enviado desde un componente hijo (saludo)`);
  }

  ngOnDestroy(): void {
    console.log("componente SaludoComponent destruido");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`Saludo ha cambiado.`,changes);
  }

}
// Orden de ciclo de vida
// ngOnChanges
// ngOnInit
// ngAfterContentInit
// ngAfterContentChecked
// ngAfterViewInit
// ngAfterViewChecked
// ngAfterContentChecked
// ngAfterViewChecked
// ngOnDestroy

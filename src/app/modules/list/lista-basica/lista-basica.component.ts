import { Component, OnInit } from '@angular/core';

// Creamos un tipo base para el ejemplo
export type Producto={
  nombre:string,
  precio:number,
  descripcion:string,
}
@Component({
  selector: 'app-lista-basica',
  templateUrl: './lista-basica.component.html',
  styleUrls: ['./lista-basica.component.scss']
})
export class ListaBasicaComponent implements OnInit {

  listaElementos:Producto[]=[{
    nombre:"Leche",
    precio:100,
    descripcion:"Descripcion del producto 1"
  },
  {
    nombre:"Pan",
    precio:200,
    descripcion:"Descripcion del producto 2"
  },
  {
    nombre:"Arroz",
    precio:300,
    descripcion:"Descripcion del producto 3"
  },
  {
    nombre:"Aceite",
    precio:400,
    descripcion:"Descripcion del producto 4"
  },
  {
    nombre:"Huevos",
    precio:500,
    descripcion:"Descripcion del producto 5"
  }
];
  cargando:boolean=false;

  opcion:number=0
  constructor() { }

  ngOnInit(): void {


  }

    cambiarCargando(){
      this.cargando=!this.cargando;
    }
    escogerOpcion(opcionEscogida:number){
      this.opcion=opcionEscogida;//dado que el valor va a cambiar implica un cambio en los elementos renderizados


    }
}

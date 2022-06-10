import { Component, OnInit } from '@angular/core';

// Ejemplo basico de formulario reactivo
import { FormBuilder,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {


  // Definimos nuestro formulario
  miFormulario:FormGroup =new FormGroup({});

  // inyectamos la clase FormBuilder para poder crear nuestro formulario
  constructor( private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    // inicializamos nuestro formulario y sus valores por defecto
    this.miFormulario = this.formBuilder.group({
      nombre:'',
      apellido:'',
      email:'',
      telefono:'',
      direccion:''
    });

    //Nos vamos a suscribir a los cambios del formulario
    this.miFormulario.valueChanges.subscribe((data)=>{
      console.log(data)
    })
  }

}

import { Component, OnInit } from '@angular/core';

// importar de reactiveForms para crear un formulario anidado
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-anidado',
  templateUrl: './formulario-anidado.component.html',
  styleUrls: ['./formulario-anidado.component.scss']
})
export class FormularioAnidadoComponent implements OnInit {

  miFormularioAnidado:FormGroup=new FormGroup({})

  constructor( private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    // Agrupacion de telefono
    const telefonoFijo=this.formBuilder.group({
      prefijo:'',
      numero:''
    });
    const telefonoMovil=this.formBuilder.group({
      prefijo:'',
      numero:''
    });

    // Agrupacion del formulario que contienen dos agrupaciones
    this.miFormularioAnidado=this.formBuilder.group({
      telefonoFijo:telefonoFijo,
      telefonoMovil:telefonoMovil
  })
  }

}

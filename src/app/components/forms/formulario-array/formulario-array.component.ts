import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray} from '@angular/forms';

@Component({
  selector: 'app-formulario-array',
  templateUrl: './formulario-array.component.html',
  styleUrls: ['./formulario-array.component.scss']
})
export class FormularioArrayComponent implements OnInit {

  miFormularioArray:FormGroup=new FormGroup({})

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.miFormularioArray=this.formBuilder.group({

      nombre:'',
      apellido:'',
      telefonos:this.formBuilder.array([])  // inicializamos la lista vacia
    })
  }
  // Metodo  get para obtener el formArray de la lista de telefonos
  get telefonosFormulario():FormArray{
    return this.miFormularioArray.get('telefonos') as FormArray
  }

  // Metodo para agregar un nuevo telefono
  anadirTelefono(){

    //Creamos un grupo telefono
    const telefonoNuevo=this.formBuilder.group({
      numero:'',
      prefijo:''
    })
    // Agregamos el grupo telefono al formArray
    this.telefonosFormulario.push(telefonoNuevo)
  }


  // Metodo para eliminar un telefono de la lista
  eliminarTelefono(index:number){
    this.telefonosFormulario.removeAt(index)
  }

}

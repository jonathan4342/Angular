import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-formulario-validado',
  templateUrl: './formulario-validado.component.html',
  styleUrls: ['./formulario-validado.component.scss']
})
export class FormularioValidadoComponent implements OnInit {

  miFormularioValidado:FormGroup=new FormGroup({})

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.miFormularioValidado=this.formBuilder.group({
      nombre:['',Validators.required], //Campo obligatorio
      apellido:'',
      // campo obligatorio con valores maximos y minimos
      edad:['',Validators.compose([Validators.required,Validators.min(18),Validators.max(88)])],
      email:['',Validators.compose([Validators.required,Validators.email])],
      // campo obligatorio con expresion regular
      password:['',Validators.compose([Validators.required,Validators.minLength(6),Validators.pattern('[a-zA-Z0-9]*')])],
      // campo booleano con true como obligatorio
      acepta:[false,Validators.requiredTrue],
    });
  }

  get nombre(){
    return this.miFormularioValidado.get('nombre');
  }
  get apellido(){
    return this.miFormularioValidado.get('apellido');
  }
  get edad(){
    return this.miFormularioValidado.get('edad');
  }
  get email(){
    return this.miFormularioValidado.get('email');
  }
  get password(){
    return this.miFormularioValidado.get('password');
  }
  get acepta(){
    return this.miFormularioValidado.get('acepta');
  }
  // Metodo de submit del formulario
  enviarFormulario(){
    // Controlar que el formulario este validado
    if(this.miFormularioValidado.valid){
      console.table(this.miFormularioValidado.value);
      // Limpiar el formulario
      this.miFormularioValidado.reset();
    }
  }

}

import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from '../../compartidos/componentes/funciones/validaciones';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { GeneroCreacionDTO, GeneroDTO } from '../generos';

@Component({
  selector: 'app-formulario-genero',
  standalone: true,
  imports: [MatButton,RouterLink,MatFormField,ReactiveFormsModule,MatInput,MatLabel,MatError],
  templateUrl: './formulario-genero.component.html',
  styleUrl: './formulario-genero.component.css'
})
export class FormularioGeneroComponent implements OnInit {
  ngOnInit(): void {
    if(this.modelo !=undefined){
      this.form.patchValue(this.modelo)
    }
  }
  private formBuilder= inject(FormBuilder);

  @Input()
  modelo!:GeneroDTO;

  @Output()
  posteoFormulario=new EventEmitter<GeneroCreacionDTO>();


  form=this.formBuilder.group({
    nombre:['',{validators:[Validators.required,primeraLetraMayuscula()]}]
  })
  obtenerCampoErrorNombre(){
    let nombre = this.form.controls.nombre;

    if(nombre.hasError('required')){
      return 'El campo nombre es requerido'
    }
    if(nombre.hasError('primeraLetraMayuscula')){
      return nombre.getError('primeraLetraMayuscula').mensaje;
    }
    return '';
  }
  guardarCambios(){
    // console.log(this.form.value);
    const genero=this.form.value as GeneroCreacionDTO;
    this.posteoFormulario.emit(genero);
  }
}

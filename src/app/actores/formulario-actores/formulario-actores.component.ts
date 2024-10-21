import { Component, EventEmitter, inject, input, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepicker, MatDatepickerModule, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { ActorCreacionDTO, ActorDTO } from '../actores';
import moment from 'moment';
import { fechaNoPuedeSerFutura } from '../../compartidos/componentes/funciones/validaciones';
import { InputImgComponent } from "../../compartidos/input-img/input-img.component";
import { AutocompleteActoresComponent } from "../autocomplete-actores/autocomplete-actores.component";

@Component({
  selector: 'app-formulario-actores',
  standalone: true,
  imports: [MatButton, RouterLink, MatFormField, ReactiveFormsModule, MatInputModule, InputImgComponent, MatLabel, MatError, MatDatepickerModule, MatDatepickerToggle, InputImgComponent, AutocompleteActoresComponent],
  templateUrl: './formulario-actores.component.html',
  styleUrl: './formulario-actores.component.css'
})
export class FormularioActoresComponent implements OnInit{
  private formBuilder = inject(FormBuilder);

  @Output()
  posteoFormulario=new EventEmitter<ActorCreacionDTO>();
  ngOnInit(): void {
    this.form.patchValue(this.modelo);
  }
  @Input()
  modelo!:ActorDTO;
  
  form=this.formBuilder.group({
    nombre:['',{validators:[Validators.required]}],
    fechaNacimiento:new FormControl<Date|null>(null,{
      validators:[Validators.required,fechaNoPuedeSerFutura()],
    }),
    foto:new FormControl<File|string|null>(null)
  })

  obtenerErrorCampoNombre(){
    let campo=this.form.controls.nombre;
    if(campo.hasError('required')){
      return 'El campo nombre es requerido';
    }
    return "";
  }

  obtenerErrorCampoFechaNacimiento(){
    let campo=this.form.controls.fechaNacimiento;
    if(campo.hasError('required')){
      return 'El campo fecha nacimiento es requerido';
    }
    if(campo.hasError('futuro')){
      return campo.getError('futuro').mensaje;
    }
    return "";
  }

  archivoSeleccionado(file:File){
    this.form.controls.foto.setValue(file);
  }

  guardarCambios(){
    if(!this.form.valid){
      return;
    }
    const actor = this.form.value as ActorCreacionDTO;
    actor.fechaNacimiento=moment(actor.fechaNacimiento).toDate();
    if(typeof actor.foto==="string"){
      actor.foto=undefined;
    }
    this.posteoFormulario.emit(actor);

  }
}

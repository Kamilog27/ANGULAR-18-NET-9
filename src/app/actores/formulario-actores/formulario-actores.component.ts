import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepicker, MatDatepickerModule, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { ActorCreacionDTO, ActorDTO } from '../actores';
import moment from 'moment';

@Component({
  selector: 'app-formulario-actores',
  standalone: true,
  imports: [MatButton,RouterLink,MatFormField,ReactiveFormsModule,MatInputModule,MatLabel,MatError,MatDatepickerModule,MatDatepickerToggle],
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
    fechaNacimiento:new FormControl<Date|null>(null)
  })
  guardarCambios(){
    if(!this.form.valid){
      return;
    }
    const actor = this.form.value as ActorCreacionDTO;
    actor.fechaNacimiento=moment(actor.fechaNacimiento).toDate();
    this.posteoFormulario.emit(actor);
  }
}

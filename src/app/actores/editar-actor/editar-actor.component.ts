import { Component, Input, numberAttribute, OnInit} from '@angular/core';
import { ActorCreacionDTO, ActorDTO } from '../actores';
import { FormularioActoresComponent } from "../formulario-actores/formulario-actores.component";

@Component({
  selector: 'app-editar-actor',
  standalone: true,
  imports: [FormularioActoresComponent],
  templateUrl: './editar-actor.component.html',
  styleUrl: './editar-actor.component.css'
})
export class EditarActorComponent {
 
  @Input({transform:numberAttribute})
  id!:number;

  actor:ActorDTO={
    id:1,
    nombre:'Tom Holland',
    fechaNacimiento:new Date('1999-03-27'),
    foto:'https://en.wikipedia.org/wiki/File:Tom_Holland_by_Gage_Skidmore.jpg'
  }
  guardarCambios(actor:ActorCreacionDTO){
    console.log('editando',actor);
  }

}

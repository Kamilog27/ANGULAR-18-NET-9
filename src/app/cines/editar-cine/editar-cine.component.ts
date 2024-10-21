import { Component, Input, numberAttribute } from '@angular/core';
import { cineCreacionDTO, cineDTO } from '../cines';
import { FormularioCinesComponent } from "../formulario-cines/formulario-cines.component";

@Component({
  selector: 'app-editar-cine',
  standalone: true,
  imports: [FormularioCinesComponent],
  templateUrl: './editar-cine.component.html',
  styleUrl: './editar-cine.component.css'
})
export class EditarCineComponent {
  @Input({transform:numberAttribute})
  id!:number;

  cine:cineDTO={id:1,nombre:'Acropolis',latitud:4.612832958336031,longitud: -74.11014819119778}
  guardarCambios(cine:cineCreacionDTO){
    console.log("editar",cine);
  }
}

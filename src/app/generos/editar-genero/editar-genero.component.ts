import { Component, Input, numberAttribute } from '@angular/core';
import { transform } from 'typescript';
import { FormularioGeneroComponent } from "../formulario-genero/formulario-genero.component";
import { GeneroCreacionDTO, GeneroDTO } from '../generos';

@Component({
  selector: 'app-editar-genero',
  standalone: true,
  imports: [FormularioGeneroComponent],
  templateUrl: './editar-genero.component.html',
  styleUrl: './editar-genero.component.css'
})
export class EditarGeneroComponent {
  @Input({transform:numberAttribute})
  id!:number;
  genero:GeneroDTO={
    id:1,
    nombre:'Accion'
  }
  guardarCambios(genero:GeneroCreacionDTO){
    // this.router.navigate(['/generos']);
    console.log('editando',genero);
  }
}

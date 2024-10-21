import { Component , Input, numberAttribute} from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../peliculas';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/SelectorMultipleModelo';
import { ActorAutoCompleteDTO } from '../../actores/actores';

@Component({
  selector: 'app-editar-pelicula',
  standalone: true,
  imports: [FormularioPeliculasComponent],
  templateUrl: './editar-pelicula.component.html',
  styleUrl: './editar-pelicula.component.css'
})
export class EditarPeliculaComponent {
  @Input({transform:numberAttribute})
  id!:number;

  pelicula:PeliculaDTO={id:1,titulo:'Spider-Man',trailer:'ABC',fechaLanzamiento:new Date('2018-07-25'),poster:'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832'}

  generosSeleccionados:SelectorMultipleDTO[]=[
    {llave:2,valor:'Accion'},
  ];

  generosNoSeleccionados:SelectorMultipleDTO[]=[
    {llave:1,valor:'Drama'},
   
    {llave:3,valor:'Comedia'},
  ];

  cinesSeleccionados:SelectorMultipleDTO[]=[
    {llave:2,valor:'Blue mall'},

  ];

  cinesNoSeleccionados:SelectorMultipleDTO[]=[
    {llave:1,valor:'Argora mall'},
    {llave:3,valor:'Acropolis'},
  ];

  actoresSeleccionados:ActorAutoCompleteDTO[]=[
    {
      id:2,
      nombre:'Tom Holland 2',
      personaje:'Spider-man',
      foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Tom_Holland_Bali_2019_1_%28cropped%29_%28cropped%29.jpg/220px-Tom_Holland_Bali_2019_1_%28cropped%29_%28cropped%29.jpg'
    }
  ];



  guardarCambios(pelicula:PeliculaCreacionDTO){
    console.log('editando pelicula',pelicula);
  }
}

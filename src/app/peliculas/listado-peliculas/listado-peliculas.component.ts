import { Component, Input } from '@angular/core';
import { ListadoGenericoComponent } from '../../compartidos/componentes/listado-generico/listado-generico.component';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-listado-peliculas',
  standalone: true,
  imports: [ListadoGenericoComponent,MatIcon,MatButton],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent {
  @Input({required: true})
  peliculas!: any[];
  
  // agregarPelicula(){
  //   this.peliculas.push({
  //     titulo: 'Inception',
  //     fechaLanzamiento: new Date('2012-07-03'),
  //     precio: 500
  //   })
  // }

  // remover(pelicula: any){
  //   const indice = this.peliculas.findIndex((peliculaActual: any) => peliculaActual.titulo === pelicula.titulo);
  //   this.peliculas.splice(indice, 1);
  // }
}

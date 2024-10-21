import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { icon, latLng, LeafletMouseEvent, marker, Marker, MarkerOptions, tileLayer } from 'leaflet';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { coordenada } from './Coordenada';
@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [LeafletModule],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent implements OnInit {
  ngOnInit(): void {
    this.capas=this.coordenadasIniciales.map(valor=>{
      const marcador=marker([valor.latitud,valor.longitud],this.markerOptions);
      return marcador;
    })
  }

@Input()
coordenadasIniciales:coordenada[]=[];

@Output()
coordenadaSeleccionada=new EventEmitter<coordenada>();

  markerOptions:MarkerOptions={
    icon:icon({
      iconSize:[25,41],
      iconAnchor:[15,41],
      iconUrl:'assets/marker-icon.png',
      iconRetinaUrl:'assets/marker-icon-2x.png',
      shadowUrl:'assets/marker-shadow.png'
    })
  }
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '...'
      })
    ],
    zoom: 14,
    center: latLng(4.612832958336031, -74.11014819119778)
  }

  capas:Marker<any>[]=[];
  manejarClic(event:LeafletMouseEvent){
    const latitud=event.latlng.lat;
    const longitud=event.latlng.lng;
    this.capas=[];
    this.capas.push(marker([latitud,longitud],this.markerOptions));
    this.coordenadaSeleccionada.emit({latitud,longitud});
  }
}


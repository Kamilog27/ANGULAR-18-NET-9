import { Component, Input, ViewChild, viewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatError, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { InputImgComponent } from '../../compartidos/input-img/input-img.component';
import { MatDatepickerModule, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { ActorAutoCompleteDTO } from '../actores';
import { MatTable, MatTableModule } from '@angular/material/table';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-autocomplete-actores',
  standalone: true,
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, DragDropModule,ReactiveFormsModule, MatInputModule, InputImgComponent, MatLabel,MatTableModule, MatError, FormsModule,MatIconModule, MatDatepickerModule, MatDatepickerToggle, InputImgComponent, AutocompleteActoresComponent,MatAutocompleteModule ],
    templateUrl: './autocomplete-actores.component.html',
  styleUrl: './autocomplete-actores.component.css'
})
export class AutocompleteActoresComponent {
  control=new FormControl();
  actores:ActorAutoCompleteDTO[]=[{
    id:1,
    nombre:'Tom Holland',
    personaje:'',
    foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Tom_Holland_Bali_2019_1_%28cropped%29_%28cropped%29.jpg/220px-Tom_Holland_Bali_2019_1_%28cropped%29_%28cropped%29.jpg'

  },
  {
    id:2,
    nombre:'Tom Holland 2',
    personaje:'',
    foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Tom_Holland_Bali_2019_1_%28cropped%29_%28cropped%29.jpg/220px-Tom_Holland_Bali_2019_1_%28cropped%29_%28cropped%29.jpg'
    
  }
];
@Input({required:true})
actoresSeleccionados:ActorAutoCompleteDTO[]=[];

columnasAMostrar=['imagen','nombre','personaje','acciones'];

@ViewChild(MatTable)table!:MatTable<ActorAutoCompleteDTO>


actorSeleccionado(event:MatAutocompleteSelectedEvent){
  this.actoresSeleccionados.push(event.option.value);
  this.control.patchValue('');
  if(this.table!=undefined){
    this.table.renderRows();
  }
}
finalizarArrastre(event:CdkDragDrop<any[]>){
  const indicePrevio=this.actoresSeleccionados.findIndex(actor=>actor===event.item.data);
  moveItemInArray(this.actoresSeleccionados,indicePrevio,event.currentIndex);
  this.table.renderRows();
}
eliminar(actor:ActorAutoCompleteDTO){
  const indice = this.actoresSeleccionados.findIndex((a:ActorAutoCompleteDTO)=>a.id==actor.id);
  this.actoresSeleccionados.splice(indice,1);
  this.table.renderRows();
}

}

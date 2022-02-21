import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes : string[] = ['spiderman', 'ironman', 'thor', 'venom']
  heroeBorrado : string = "";

  borrarHeroe(){
    this.heroeBorrado =  this.heroes.shift() || "";
    console.log("Borrando héroe: ", this.heroeBorrado)
  }

}

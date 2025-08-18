import { Component } from '@angular/core';

@Component({
  selector: 'app-animacion',
  templateUrl: './animacion.html',
  styleUrls: ['./animacion.css']
})
export class AnimacionComponent {
  estado: boolean = false;

  toggle() {
    this.estado = !this.estado;
  }
}

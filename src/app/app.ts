import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hijo } from './hijo/hijo';
import { Padre } from './padre/padre';

@Component({
  selector: 'app-root',
  imports: [Padre],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyecto_1');

  alumno: string = 'Kev';
  edad: number = 25;

}

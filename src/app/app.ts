import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadosComponent } from './Empleados/empleados';

@Component({
  selector: 'app-root',
  imports: [EmpleadosComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyecto_1');

  alumno: string = 'Kev';
  edad: number = 25;




}

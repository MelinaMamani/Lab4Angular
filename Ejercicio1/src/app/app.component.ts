import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public edad1: number;
  public edad2: number;
  public suma: number;
  public promedio: number;

  constructor() {
    this.edad1 = 0;
    this.edad2 = 0;
    this.suma = 0;
    this.promedio = 0;
  }

  title = 'ejercicio1';

  ngOnInit() : void {}

  calcularEdades() : void {
    this.suma = this.edad1 + this.edad2;
    this.promedio = this.suma/2;
  }

  limpiarInputs() : void {
    this.edad1 = 0;
    this.edad2 = 0;
  }
}
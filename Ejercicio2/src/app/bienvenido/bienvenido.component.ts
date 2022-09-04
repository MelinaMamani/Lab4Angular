import { Component, OnInit } from '@angular/core';
import { Usuario } from '../entidades/usuario';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  usuario : Usuario = new Usuario();

  constructor() { }

  ngOnInit(): void {
    this.usuario.nombre = 'Melina';
    this.usuario.clave = '';
    localStorage.setItem('usuario', JSON.stringify(this.usuario));
  }
}

import { Component } from '@angular/core';
import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './personas.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'listado de personas';

  constructor(private logginService: LoggingService, private personasService: PersonasService){

  }
  ngOnInit(): void {
    this.personas=this.personasService.personas;
  }

  personas: Persona[] = [];

  /* 
  No es necesario tenerlo porque con el service se hace
  personaAgregada(persona: Persona){
    this.logginService.enviaMensajeAConsola("Agregamos al arreglo la nueva persona:"+persona.nombre);
    this.personasService.personaAgregada(persona);
  } */

}

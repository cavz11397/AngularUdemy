import { ElementRef } from '@angular/core';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

/* Si se quiere que el servicio sea a nivel general, se declara el provider en app.module.ts */
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {

  /* @Output() personaCreada = new EventEmitter<Persona>(); */

  /* 
  TWO BINDIG
  nombreInput: string = '';
  apellidoInput: string = ''; */

  /* agregarPersona() {
    //this.personas.push(new Persona(this.nombreInput,this.apellidoInput));
    this.personaCreada.emit(new Persona(this.nombreInput, this.apellidoInput));
  } 
  */

  /*
  TEMPLATE REFERENCE
  agregarPersona(nombreInput: HTMLInputElement, apellidoInput: HTMLInputElement) {
    this.personaCreada.emit(new Persona(nombreInput.value, apellidoInput.value));
  }
  */

  /*
  VIEW CHILD
  */
  @ViewChild('nombreRef') nombreInput: ElementRef;
  @ViewChild('apellidoRef') apellidoInput: ElementRef;

  constructor(private loggingService: LoggingService, private personasService: PersonasService) {
    this.personasService.saludar.subscribe(
      (indice: number) => alert(`El indice es: ${indice}`)
    );
  }

  agregarPersona() {
    let persona1: Persona = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    this.loggingService.enviaMensajeAConsola("Enviamos persona con nombre: " + persona1.nombre + " y apellido:" + persona1.apellido);
    this.personasService.personaAgregada(persona1);
    /* this.personaCreada.emit(persona1); */
  }

}

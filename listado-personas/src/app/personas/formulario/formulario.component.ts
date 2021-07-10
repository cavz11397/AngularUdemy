import { ElementRef, OnInit } from '@angular/core';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggingService } from '../../LoggingService.service';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personas.service';

/* Si se quiere que el servicio sea a nivel general, se declara el provider en app.module.ts */
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {

  /* @Output() personaCreada = new EventEmitter<Persona>(); */


  /*  TWO BINDIG */
  nombreInput: string = '';
  apellidoInput: string = '';
  index: number;
  modoEdicion: number;

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
  /*  @ViewChild('nombreRef') nombreInput: ElementRef;
   @ViewChild('apellidoRef') apellidoInput: ElementRef; */

  constructor(private loggingService: LoggingService,
    private personasService: PersonasService,
    private router: Router,
    private route: ActivatedRoute) {
    this.personasService.saludar.subscribe(
      (indice: number) => alert(`El indice es: ${indice}`)
    );
  }
  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    //el mas conviewrte el queruy string a number
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];
    if (this.modoEdicion != null && this.modoEdicion === 1) {
      let persona: Persona = this.personasService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  onGuardarPersona() {
    /*  let persona1: Persona = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value); */
    let persona1: Persona = new Persona(this.nombreInput, this.apellidoInput);
    if (this.modoEdicion != null && this.modoEdicion === 1) {
      this.personasService.modificarPersona(this.index, persona1);
    } else {
      this.personasService.personaAgregada(persona1);
    }
    this.loggingService.enviaMensajeAConsola("Enviamos persona con nombre: " + persona1.nombre + " y apellido:" + persona1.apellido);
    this.router.navigate(['personas']);
    /* this.personaCreada.emit(persona1); */
  }

  eliminarPersona() {
    if (this.index != null) {
      this.personasService.eliminarPersona(this.index);
    }
    this.router.navigate(['personas']);
  }

}

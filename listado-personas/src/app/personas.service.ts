import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService {

    constructor(private logginService: LoggingService){}

    saludar = new EventEmitter<number>();

    personas: Persona[] = [
        new Persona('Juan', 'Perez'),
        new Persona('Laura', 'Suarez'),
        new Persona('Alejo', 'Zuluaga')
    ];

    personaAgregada(persona: Persona) {
        this.logginService.enviaMensajeAConsola(`Agregamos persona ${persona.nombre}`)
        this.personas.push(persona);
    }
}
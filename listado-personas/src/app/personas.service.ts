import { EventEmitter, Injectable } from "@angular/core";
import { DataService } from "./data.service";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService {

    constructor(private logginService: LoggingService, private dataService: DataService) { }

    saludar = new EventEmitter<number>();

    personas: Persona[] = [];

    setPersonas(personas: Persona[]) {
        this.personas = personas;
    }

    obtenerPersonas() {
        return this.dataService.cargarPersonas();
    }

    personaAgregada(persona: Persona) {
        this.logginService.enviaMensajeAConsola(`Agregamos persona ${persona.nombre}`)
        if (this.personas == null) {
            this.personas = [];
        }
        this.personas.push(persona);
        this.dataService.guardarPersonas(this.personas);

    }

    encontrarPersona(index: number) {
        let persona: Persona = this.personas[index];
        return persona;
    }

    modificarPersona(index: number, persona: Persona) {
        let persona1 = this.personas[index];
        persona1.nombre = persona.nombre;
        persona1.apellido = persona.apellido;
        this.dataService.modificarPersona(index, persona);
    }

    eliminarPersona(index: number) {
        this.personas.splice(index, 1);
        this.dataService.eliminarPersona(index);
        //se vuelve a guartadrpara regenerar indicates
        this.modificarPersonas();
    }
    
    modificarPersonas() {
        if (this.personas != null) {
            this.dataService.guardarPersonas(this.personas);
        }
    }
}
import { Persona } from "./persona.model";

export class PersonasService {
    personas: Persona[] = [
        new Persona('Juan', 'Perez'),
        new Persona('Laura', 'Suarez'),
        new Persona('Alejo', 'Zuluaga')
    ];

    personaAgregada(persona: Persona) {
        this.personas.push(persona);
    }
}
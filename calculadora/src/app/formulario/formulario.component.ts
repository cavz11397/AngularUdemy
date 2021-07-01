import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() resultadoCreado = new EventEmitter<number>();

  OperandoA: number = 0;
  OperandoB: number = 0;

  sumar(){
    this.resultadoCreado.emit(this.OperandoA+this.OperandoB);
  }

  restar(){
    this.resultadoCreado.emit(this.OperandoA-this.OperandoB);
  }

  multiplicar(){
    this.resultadoCreado.emit(this.OperandoA*this.OperandoB);
  }

  dividir(){
    this.resultadoCreado.emit(this.OperandoA/this.OperandoB);
  }

}

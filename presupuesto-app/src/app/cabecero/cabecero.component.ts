import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent  {

  @Input() presupuesto: number;
  @Input() ingresoTotal: number;
  @Input() egresoTotal: number;
  @Input() porcentajeTotal: number;


}

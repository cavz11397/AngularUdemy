import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';
  
  resultado: number = 0;

  resultadocreado(res: number){
    this.resultado=res;
  }
  
}

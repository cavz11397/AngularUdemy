import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import firebase from 'firebase/app';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyD-60YfSht0NxBClm3Xxnvwu30PtB_CXAM",
      authDomain: "listado-personas-e6e4e.firebaseapp.com",
      /*       databaseURL: "https://listado-personas-e6e4e-default-rtdb.firebaseio.com",
            projectId: "listado-personas-e6e4e",
            storageBucket: "listado-personas-e6e4e.appspot.com",
            messagingSenderId: "470443821178",
            appId: "1:470443821178:web:58c768fec3c0a3b1b4d3c3" */
    });
  }
  titulo = 'listado de personas';

  constructor(private loginService: LoginService) { }

  isAutenticado() {
    return this.loginService.isAutenticado();
  }

  salir() {
    this.loginService.logOut();
  }

  /* 
  No es necesario tenerlo porque con el service se hace
  personaAgregada(persona: Persona){
    this.logginService.enviaMensajeAConsola("Agregamos al arreglo la nueva persona:"+persona.nombre);
    this.personasService.personaAgregada(persona);
  } */

}

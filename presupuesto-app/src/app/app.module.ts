import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { EgresosComponent } from './egresos/egresos.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { FormularioComponent } from './formulario/formulario.component';
import { EgresoService } from './egresos/egreso.service';
import { IngresoService } from './ingresos/ingreso.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IngresosComponent,
    EgresosComponent,
    CabeceroComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    IngresoService,
    EgresoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

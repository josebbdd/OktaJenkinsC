import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './listado/lista.component';
import { ContableService } from './servicios/contable.service';

@NgModule({
  declarations: [
    AppComponent, ListaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ ContableService],
  bootstrap: [AppComponent]
})
export class AppModule { }

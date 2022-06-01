import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { ListModule } from './modules/list/list.module';
//Modulo personalizado que exporta elemntetos de tipo listas

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //importamos el modulo personalizado
    ListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

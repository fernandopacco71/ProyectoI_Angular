import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';

import { FormsModule } from '@angular/forms';
import { InicioComponent } from './modules/general/inicio/inicio.component';
import { ContactosComponent } from './modules/general/contactos/contactos.component';
import { InformacionComponent } from './modules/general/informacion/informacion.component';
import { SigninComponent } from './modules/general/signin/signin.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuNavComponent } from './menu-nav/menu-nav.component';
@NgModule({
  declarations: [
    AppComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    InicioComponent,
    ContactosComponent,
    InformacionComponent,
    SigninComponent,
    NotFoundComponent,
    MenuNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { InformacionComponent } from './modules/general/informacion/informacion.component';
import { ContactosComponent } from './modules/general/contactos/contactos.component';
import { InicioComponent } from './modules/general/inicio/inicio.component';
import { SigninComponent } from './modules/general/signin/signin.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: InicioComponent, },
  { path: 'contact', component: ContactosComponent },
  { path: 'about', component: InformacionComponent },
  { path: 'signin', component: SigninComponent },
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  //declarations: []
})
export class AppRoutingModule { }

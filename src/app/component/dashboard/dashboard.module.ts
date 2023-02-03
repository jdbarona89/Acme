import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ReportesComponent } from './reportes/reportes.component';

import { SharedModule } from '../shared/shared.module';
import { CrearUsuariosComponent } from './usuarios/crear-usuarios/crear-usuarios.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    NavbarComponent,
    UsuariosComponent,
    ReportesComponent,
    CrearUsuariosComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule

  ]
})
export class DashboardModule { }

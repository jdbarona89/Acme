import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { ReportesComponent } from './reportes/reportes.component';
import { CrearUsuariosComponent } from './usuarios/crear-usuarios/crear-usuarios.component';
import { UsuariosComponent } from './usuarios/usuarios.component';



const routes: Routes = [

  {path:'',component:DashboardComponent, children:[
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'usuario',component:UsuariosComponent},
    {path:'reportes',component:ReportesComponent},
    {path:'crearUsuario',component:CrearUsuariosComponent}

  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

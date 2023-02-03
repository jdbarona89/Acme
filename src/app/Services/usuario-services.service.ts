import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuariosComponent } from '../component/dashboard/usuarios/usuarios.component';
import { Usuario } from '../interfaces/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioServicesService {


  listUsuarios:Usuario[]=[
    {nombre:"Juan",apellido:"Barona",cargo:"Ingeniero de Sistemas",fechaIngreso:new Date(),salario:2800000},
    {nombre:"Carlos",apellido:"Balanta",cargo:"Civil",fechaIngreso:new Date(),salario:800000},
    {nombre:"David",apellido:"Londoño",cargo:"Electrico",fechaIngreso:new Date(),salario:5800000}
    ]

  constructor(private http:HttpClient) { }
  getUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>('../assets/data/usuarios.json')
  }

  listaUsuarios(){
    return this.listUsuarios;
  }
}

import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Route, Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioServicesService } from 'src/app/Services/usuario-services.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  listUsuarios:Usuario[]=[];
   

  //dataSource!: MatTableDataSource<any>;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private usuarioServices: UsuarioServicesService,private _snackBar: MatSnackBar, private router:Router) { }


  


  displayedColumns: string[] = ['nombre', 'apellido', 'cargo', 'fechaIngreso', 'salario', 'opciones'];
  dataSource=new MatTableDataSource(this.listUsuarios);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {

    this.cargarUsuarios();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource.filter)
  }

  /*listaUsuarios() {
    this.usuarioServices.getUsuarios().subscribe(data => {
      this.listUsuarios = data;
      console.log(this.listUsuarios)
    })
  }*/

  cargarUsuarios() {
    this.listUsuarios=this.usuarioServices.listaUsuarios();
    this.dataSource = new MatTableDataSource(this.listUsuarios);
  }

  eliminarUsuario(index:number){

    this.listUsuarios.splice(index,1);
    console.log(index);
    this.cargarUsuarios(),
    this._snackBar.open('Usuario Eliminado Exitosamente', '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top'

  })
}
crearUsuario(){
  this.router.navigate(['crearUsuarios']);
}

}

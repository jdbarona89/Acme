import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioServicesService } from 'src/app/Services/usuario-services.service';

@Component({
  selector: 'app-crear-usuarios',
  templateUrl: './crear-usuarios.component.html',
  styleUrls: ['./crear-usuarios.component.css']
})


export class CrearUsuariosComponent {

  today:Date = new Date();
  month:number = this.today.getMonth();
  year:number = this.today.getFullYear();
  form:FormGroup;


  tiles: any[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];

  campaignOne = new FormGroup({
    start: new FormControl(new Date(this.year, this.month, 13)),
    end: new FormControl(new Date(this.year, this.month, 16)),
  });
  campaignTwo = new FormGroup({
    start: new FormControl(new Date(this.year, this.month, 15)),
    end: new FormControl(new Date(this.year, this.month, 19)),
  });


  constructor(private fm:FormBuilder,private usuarioServices: UsuarioServicesService,
    private router:Router,private _snackBar: MatSnackBar){


this.form=this.fm.group({

nombre:['',Validators.required],
apellido:['',Validators.required],
cargo:['',Validators.required],
salario:['',Validators.required],
fechaIngreso:['',Validators.required],

})


  }

  agregarUsuario(){

    console.log(this.form)
    const usuario:Usuario={
      nombre:this.form.value.nombre,
      apellido:this.form.value.apellido,
      cargo:this.form.value.cargo,
      fechaIngreso:this.form.value.fechaIngreso,
      salario:this.form.value.salario,
    }
    this.usuarioServices.listUsuarios.push(usuario)
    this.router.navigate(["/dashboard/usuario"])
    this._snackBar.open('Usuario Agregado Exitosamente!!', '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top'

  })
    
  
  }

  volver(){
    this.router.navigate(["/dashboard/usuario"])
  }
  

}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup;
  spinner:boolean=false;
  hide = true;

  constructor(private fb: FormBuilder, private router: Router, private _snackBar: MatSnackBar) {

    this.form = this.fb.group({
      usuario: ['', Validators.required],
      pass: ['', Validators.required]

    })
  }

  ingresar() {

    console.log(this.form.value)
    const usuario = this.form.value.usuario;
    const pass = this.form.value.pass;

    if (usuario == "jbarona" && pass == "12345") {
      this.directDasboard()
    } else {
      this.error()
    }

  }

  error() {
    this._snackBar.open('Usuario y/o contraseña invalidos', '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top'

    })

  }directDasboard() {
    this.spinner=true;
    setTimeout(()=>{
      this.router.navigate(['dashboard'])
    },1500)
  }



}

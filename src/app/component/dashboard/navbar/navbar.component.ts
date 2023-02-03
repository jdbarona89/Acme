import { Component } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';
import { MenuServicesService } from 'src/app/Services/menu-services.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  menu:Menu[]=[];

  constructor(private _menuservices:MenuServicesService){}

  ngOnInit():void{
    this.cargarMenu();
  }

    cargarMenu(){
      this._menuservices.getMenu().subscribe(data=>{
        this.menu=data
        //console.log(data);
      })
  }

    
  }

  


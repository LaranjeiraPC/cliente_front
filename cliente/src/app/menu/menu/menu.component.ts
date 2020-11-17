import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Pages/usuario/service/usuario.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
  }

  logout(){
    this._usuarioService.setAutenticar(false);
  }

}

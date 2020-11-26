import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsuarioService } from 'src/app/Pages/usuario/service/usuario.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {

  private _permissao: boolean = false;
  subscription: Subscription;
  
  constructor(
    private _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    
    this.subscription = this._usuarioService.get().subscribe(data => {
      if(data.permissao == "Administrador"){
        this._permissao = true;
      }else{
        this._permissao = false;
      }
    });
  }

  logout(){
    this._usuarioService.setAutenticar(false, null, null, null);
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

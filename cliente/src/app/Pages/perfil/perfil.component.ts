import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsuarioService } from '../usuario/service/usuario.service';
import { Location } from '@angular/common';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit, OnDestroy {

  picture: ImageSnippet;
  private _id: number;

  private _perfil: any = "../../../assets/perfil.jpg";
  
  usuarioSubscription: Subscription;
  imagePath: any;
  url: string | ArrayBuffer;

  constructor( 
    private _usuarioService: UsuarioService,
    private _location: Location,) { }

  ngOnInit() {
    this.usuarioSubscription = this._usuarioService.get().subscribe(data => {
      this._id = data.id;
      this._perfil = "data:image/jpg;base64," + data.image;
    });
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    if (file.type.match(/image\/*/) == null) {
      this._usuarioService.setAlert("Error", "Only images are supported.");
      return;
    }

    reader.addEventListener('load', (event: any) => {
      this.picture = new ImageSnippet(event.target.result, file);
    });

    reader.readAsDataURL(file);

    reader.onload = (_event) => { 
      this._perfil = reader.result; 
    }

  }

  salvar(){
    let subscription = this._usuarioService.uploadImage(this.picture.file, 1).subscribe(
      (res) => {
        subscription.unsubscribe();
        this._usuarioService.setAlert(res.status, res.message);
        this.voltar();
      },
      (err) => {
        console.log(err);
      });
  }
  
  ngOnDestroy(): void {
    this.usuarioSubscription.unsubscribe();
  }

  voltar() {
    this._location.back();
  }

}

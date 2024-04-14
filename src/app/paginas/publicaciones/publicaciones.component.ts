import { Component, Input, OnInit } from '@angular/core';
import { ConsumoApiService } from '../../servicios/consumo-api.service';
import { Publicacion } from '../../interfaces/publicacion.interface';
import { Usuario } from '../../interfaces/usuario.interface';
import { PublicacionComponent } from "./publicacion/publicacion.component";

@Component({
  selector: 'app-publicaciones',
  standalone: true,
  templateUrl: './publicaciones.component.html',
  styleUrl: './publicaciones.component.css',
  imports: [PublicacionComponent]
})
export class PublicacionesComponent implements OnInit {  // Implementacion de interfaz OnInit

  // Esta línea declara una propiedad pública llamada publicaciones que es un arreglo vacío de tipo Publicacion
  public publicaciones: Publicacion[] = [];
  public usuarios: Usuario[] = [];
  textoBuscado: string = "";

  // Este constructor de la clase inyecta el servicio ConsumoApiService y lo almacena en una propiedad privada llamada consumoApiService
  constructor(private consumoApiService: ConsumoApiService) { }

  // Este es un método obligatorio de la interfaz OnInit que se llama automáticamente cuando se inicializa el componente
  ngOnInit(): void {
    // Dentro de ngOnInit se llama al método getPublicaciones para obtener los datos al iniciar el componente
    this.getPublicaciones();
    this.getUsuarios();
  }

  getPublicaciones(): void {
    this.consumoApiService.getData("posts")  // Se llama al método getData del servicio ConsumoApiService
      .subscribe({  // El método getData devuelve un Observable, por lo que se utiliza subscribe para manejar la respuesta
        next: (res) => {
          // Se actualizan las publicaciones almacenando la respuesta (res) en la propiedad publicaciones
          this.publicaciones = res;
        },
        error: (err) => {
          // La función error se ejecuta si ocurre un error al obtener los datos (err)
          console.log(err);
        }
      });
  }

  getUsuarios(): void {
    this.consumoApiService.getData(`users`)  // Se llama al método getData del servicio ConsumoApiService
      .subscribe({  // El método getData devuelve un Observable, por lo que se utiliza subscribe para manejar la respuesta
        next: (res) => {
          // Se actualizan los usuarios almacenando la respuesta (res) en la propiedad publicaciones
          this.usuarios = res;
        },
        error: (err) => {
          // La función error se ejecuta si ocurre un error al obtener los datos (err)
          console.log(err);
        }
      });
  }

  getUsuarioPorId(userId: number): Usuario | undefined {
    return this.usuarios.find((user) => user.id === userId);
  }

  buscarTexto(input: HTMLInputElement) {
    this.textoBuscado = input.value.toLowerCase();
    console.log(this.textoBuscado);
  }

}

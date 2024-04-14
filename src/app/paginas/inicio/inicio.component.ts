import { Component, OnInit } from '@angular/core';
import { PexelApiService } from '../../servicios/pexel-api.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {
  public imagenes: any[] = [];

  // Este constructor de la clase inyecta el servicio PexelApiService y lo almacena en una propiedad privada llamada pexelApiService 
  constructor(private pexelApiService: PexelApiService) { }

  ngOnInit(): void {
    this.getImagenes("people");
  }

  getImagenes(query: string): void {
    this.pexelApiService.getData(query)  // Se llama al método getData del servicio PexelApiService
      .subscribe({  // El método getData devuelve un Observable, por lo que se utiliza subscribe para manejar la respuesta
        next: (res) => {
          // Se actualizan las imagenes almacenando la respuesta (res) en la propiedad imagenes
          this.imagenes = res.photos;
          console.log(this.imagenes);
        },
        error: (err) => {
          // La función error se ejecuta si ocurre un error al obtener los datos (err)
          console.log(err);
        }
      });
  }

}

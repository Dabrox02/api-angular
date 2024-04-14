import { Component, Input, OnInit } from '@angular/core';
import { Publicacion } from '../../../interfaces/publicacion.interface';
import { Usuario } from '../../../interfaces/usuario.interface';
import { ConsumoApiService } from '../../../servicios/consumo-api.service';

@Component({
  selector: 'app-publicacion',
  standalone: true,
  imports: [],
  templateUrl: './publicacion.component.html',
  styleUrl: './publicacion.component.css'
})
export class PublicacionComponent {
  @Input() publicacion!: Publicacion;
  @Input() usuario!: Usuario | undefined;

}

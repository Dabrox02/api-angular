import { Component, OnInit } from '@angular/core';
import { PexelApiService } from '../../servicios/pexel-api.service';
import { Personas } from '../../interfaces/personas.interface';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent implements OnInit {

  personas: Personas[] = [];

  constructor(private pexelApiService: PexelApiService) { }

  ngOnInit(): void {
    this.getPersonas();
  }

  getPersonas(): void {
    this.pexelApiService.getData(``, `/collections/lldryvy`)  // Se llama al método getData del servicio pexelApiService
      .subscribe({
        next: (res) => {
          res.media.forEach((photo: Personas) => {
            this.personas.push(photo);
          });
          console.log(this.personas);
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

}

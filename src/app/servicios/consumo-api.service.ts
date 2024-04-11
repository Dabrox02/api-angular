import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ConsumoApiService { 

  API_URL: string = 'https://jsonplaceholder.typicode.com/';  
  // Esta línea declara una constante pública de cadena API_URL que contiene la URL base para las llamadas a la API

  constructor(private http: HttpClient) { }  
  // Este constructor de la clase se inyecta el servicio HttpClient y lo almacena en una propiedad privada llamada http

  getData(endpoint: string): Observable<any> {  // Esta línea define un método llamado getData que devuelve un Observable de cualquier tipo
    return this.http.get<any>(`${this.API_URL}${endpoint}`).pipe(res => res);  
    // Esta línea devuelve un Observable creado por el método HttpClient.get. Obtiene datos de la API_URL y usa el operador pipe para simplemente devolver la respuesta (res) sin modificaciones.
  }
}

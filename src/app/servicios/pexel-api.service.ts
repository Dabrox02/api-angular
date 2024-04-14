import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PexelApiService {

  API_URL: string = 'https://api.pexels.com/v1';
  // Esta línea declara una constante pública de cadena API_URL que contiene la URL base para las llamadas a la API

  constructor(private http: HttpClient) { }
  // Este constructor de la clase se inyecta el servicio HttpClient y lo almacena en una propiedad privada llamada http

  getData(query: string, other?: string): Observable<any> {  // Esta línea define un método llamado getData que devuelve un Observable de cualquier tipo
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'taB7YcLoLPEyhlEBq8NzYPMgKeTVSciHkZr5RsMYJWBSFeijH8vBYuWE'); // Agregamos cabecero de autorizacion
    if (other) {
      return this.http.get<any>(`${this.API_URL}${other}`, { headers }).pipe(res => res);
    }
    return this.http.get<any>(`${this.API_URL}/search?query=${query}&per_page=5`, { headers }).pipe(res => res);
    // Esta línea devuelve un Observable creado por el método HttpClient.get. Obtiene datos de la API_URL y usa el operador pipe para simplemente devolver la respuesta (res) sin modificaciones.
  }
}

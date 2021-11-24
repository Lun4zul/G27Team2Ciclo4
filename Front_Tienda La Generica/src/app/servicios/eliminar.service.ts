import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EliminarService {
  
  constructor(private http: HttpClient) { }

  borrar(urlapi: string, cedula: string) {
    return this.http.delete(`${urlapi}${cedula}`);
  }
  
  codigoRespuesta(urlapi: string, cedula: string) {
    return this.http.delete(`${urlapi}${cedula}`, {observe: 'response'});
  }
}

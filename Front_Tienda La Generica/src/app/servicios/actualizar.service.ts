import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActualizarService {

  constructor(private http: HttpClient) { }

  actualizar(urlapi: string, cedula: string, body: any): any {
   return this.http.put(`${urlapi}${cedula}`,
    body);
  }
  
  codigoRespuesta(urlapi: string, cedula: string, body: any): any {
   return this.http.put(`${urlapi}${cedula}`,
    body, { observe: 'response'});
  }
}

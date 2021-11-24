import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeerService {

  sies!: any[];

  content!: any[];
  constructor(private http: HttpClient) { }

  leer(urlapi: string, cedula: string) {
    return this.http.get(urlapi + cedula);
  }

  leerTodos(urlapi: string) {
    return this.http.get(urlapi);
  }

  codigoRespuesta(urlapi: string, cedula: string) {
    return this.http.get(urlapi+cedula,  { observe: 'response' });
  }
}


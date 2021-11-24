import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrearService {

  constructor(private http: HttpClient) { }


  crear(urlapi: string, body: any) {

    return this.http.post(`${urlapi}`,
      body);
  }
  
  codigoRespuesta(urlapi: string, body: any) {

    return this.http.post(`${urlapi}`,
      body, {observe: 'response'});
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductosComponent } from './productos.component';

@Injectable({
  providedIn: 'root'
})

export class FileUploadService {

  // API url
  baseApiUrl = "http://localhost:8080/api/productos";

  borrar:any;
  codigoRespuesta!: number;

  //inicializando objeto http
  constructor(private http: HttpClient) { }

  //variable auxiliar que almacena resultados de cada envio
  resultados = Array();

  // Retorna un objeto observable
  upload(file: any): Promise<any[]> {

    this.http.delete(this.baseApiUrl,
      {observe:'response'}
      ).subscribe(response=>{
        this.codigoRespuesta=response.status;
        this.borrar=response;
        console.log(this.codigoRespuesta);
      });

    return new Promise<any[]>((resolve, reject) => {
      //leyendo el contenido
      var reader = new FileReader();
      reader.onloadend = (e) => {

        let lines = reader.result as string;

        let separados = lines.split("\n");

        let comparar: string[]

        for (let lineaactual of separados) {

          if (separados == comparar) {
						continue;
					}
          lineaactual.replace(";", ",");
          let columnas = lineaactual.split(",", 6);
          this.http.post(
            this.baseApiUrl,
            {
              precioventa: columnas[5],
              ivacompra: columnas[4],
              preciocompra: columnas[3],
              nitproveedor: columnas[2],
              nombreproducto: columnas[1],
              codigoproducto: columnas[0]
            },
            { observe: 'response' }).subscribe(
              (response: any) => {
                let resaux = [];
                resaux[0] = response.status;
                this.resultados.push(resaux);
              }
            );
        }
        //console.log(this.resultados);
        resolve(this.resultados);
      };
      reader.readAsText(file);
    });
  }
}
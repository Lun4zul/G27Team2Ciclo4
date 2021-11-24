import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
//import { Observable } from "rxjs/Observable";
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ActualizarService } from 'src/app/servicios/actualizar.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.scss']
})
export class ActualizarComponent {

  urlapi: string = "http://localhost:8080/api/clientes/";
  codigoRespuesta!: number;
  nombre!: string;
  cedula!: number;
  email!: string;
  telefono!: string;
  direccion!: string;
  correcto!: number;

  constructor(private toastr: ToastrService, private router: Router,
    private read: ActualizarService) { }

  updateDato() {
    let body = {
      "cedulacliente": this.cedula,
      "direccioncliente": this.direccion,
      "emailcliente": this.email,
      "nombrecliente": this.nombre,
      "telefonocliente": this.telefono,
    }
    console.log(body)

    this.read.codigoRespuesta(this.urlapi, this.cedula, body).subscribe(data => {
      this.codigoRespuesta = data.status;
      console.log(data.status)
      this.comparar();
    });
    console.log(this.codigoRespuesta);
  }

  comparar() {
    if (this.codigoRespuesta === 200) {
      this.correcto = 1;
      this.showNotification('top', 'right', 1);
    } else if (this.codigoRespuesta === 404) {
      this.correcto = 2;
      this.showNotification('top', 'right', 2);
    } else if (this.codigoRespuesta === 500) {
      this.correcto = 3;
      this.showNotification('top', 'right', 2);
    }
    console.log(this.codigoRespuesta)
    console.log(this.correcto)
  }

  showNotification(from: string, align: string, type: number) {
    switch (type) {
      case 1:
        this.toastr.success('<span><i class="fas fa-check"></i></span><b>Cliente actualizado con exito</b>', '', {
          disableTimeOut: false,
          closeButton: true,
          enableHtml: true,
          toastClass: 'alert alert-success alert-with-icon',
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      case 2:
        this.toastr.error('<span><i class="fas fa-times"></i></span> <b>Error al actualizar el cliente</b>', '', {
          disableTimeOut: false,
          enableHtml: true,
          closeButton: true,
          toastClass: 'alert alert-danger alert-with-icon',
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      default:
        break;
    }
  }
}

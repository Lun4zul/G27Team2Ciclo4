import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CrearService } from 'src/app/servicios/crear.service';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent {

  urlapi: string = "http://localhost:8080/api/clientes/";
  codigoRespuesta!: number;
  nombre!: string;
  cedula!: number;
  email!: string;
  telefono!: string;
  direccion!: string;
  correcto!: number;

  constructor(private toastr: ToastrService, private router: Router,
    private read: CrearService) {}

  crearDato() {
    let body = {
      "cedulacliente": this.cedula,
      "direccioncliente": this.direccion,
      "emailcliente": this.email,
      "nombrecliente": this.nombre,
      "telefonocliente": this.telefono,
    }
    console.log(body)

    this.read.codigoRespuesta(this.urlapi, body).subscribe(data => {
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

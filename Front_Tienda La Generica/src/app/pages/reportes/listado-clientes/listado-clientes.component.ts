import { Component, OnInit } from '@angular/core';
import { LeerService } from 'src/app/servicios/leer.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.scss']
})
export class ListadoClientesComponent implements OnInit {

  urlapi: string = "http://localhost:8080/api/clientes/";

  codigoRespuesta!: number;
  mostrar!: boolean;
  cedula!: string;
  correcto!: number;
  contenido: any;

  constructor(private toastr: ToastrService, private read: LeerService, private router: Router) {

  }
  ngOnInit(): void {

    console.log("llego")
    this.read.leerTodos(this.urlapi).subscribe((data: any[]) => {
      this.contenido = data;
      console.log(this.contenido);
    });
    this.comparar();
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
        this.toastr.success('<span><i class="fas fa-check"></i></span><b>Cliente eliminado con exito</b>', '', {
          disableTimeOut: false,
          closeButton: true,
          enableHtml: true,
          toastClass: 'alert alert-success alert-with-icon',
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      case 2:
        this.toastr.error('<span><i class="fas fa-times"></i></span> <b>Error al eliminar el cliente</b>', '', {
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

import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LeerService } from 'src/app/servicios/leer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ventas-xcliente',
  templateUrl: './ventas-xcliente.component.html',
  styleUrls: ['./ventas-xcliente.component.scss']
})
export class VentasXClienteComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  res: any;
  nombre: any;
  contenido: any;
  contenido2: any;
  contenido3: any;
  urlapi: string = "http://localhost:8080/api/ventas";
  urlapi2: string = "http://localhost:8080/api/clientes/";
  cedula: any;
  valortotal: number = 0.0;
  total: number = 0.0;
  list = Array();

  constructor(private read: LeerService, private read2: LeerService, private router: Router) {
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ngOnInit() {
    this.read.leerTodos(this.urlapi).subscribe(async (data: any[]) => {
      this.contenido = data;
      console.log(this.contenido);
      this.contenido3 = await this.traernombre();
      console.log("cedula " + this.cedula);
      console.log("contenido3");
      console.log(this.contenido3);
      this.dtTrigger.next(this.dtOptions);
    });

    //Opciones especiales de la tabla, localización y caracteristicas
    this.dtOptions = {
      pagingType: 'full_numbers',
      columns: [
        {
          title: 'Cedula del cliente',
        },
        {
          title: 'Nombre del cliente',
        },
        {
          title: 'Total de ventas',
        }
      ],
      pageLength: 10,
      responsive: true,
      language: {
        processing: "Procesando...",
        search: "Buscar:",
        lengthMenu: "Mostrar _MENU_ elementos",
        info: "Mostrando desde _START_ al _END_ de _TOTAL_ elementos",
        infoEmpty: "Mostrando ningún elemento.",
        infoFiltered: "(filtrado _MAX_ elementos total)",
        infoPostFix: "",
        loadingRecords: "Cargando registros...",
        zeroRecords: "No se encontraron registros",
        emptyTable: "No hay datos disponibles en la tabla",
        paginate: {
          first: "Primero",
          previous: "Anterior",
          next: "Siguiente",
          last: "Último"
        },
        aria: {
          sortAscending: ": Activar para ordenar la tabla en orden ascendente",
          sortDescending: ": Activar para ordenar la tabla en orden descendente"
        }
      }
    };
  }

  traernombre(): Promise<any[]> {
    return new Promise<any[]>((resolve, reject) => {

      for (let lista of this.contenido) {
        console.log(lista);
        this.cedula = lista['cedulaCliente'];
        this.total = lista['totalVenta'];
        this.valortotal += lista['totalVenta'];
        console.log("cedula:" + this.cedula);
        console.log("la sumatoria es " + this.valortotal);
        console.log("el valor total es " + this.total);

        this.read2.leer(this.urlapi2, this.cedula).subscribe((dato: any[]) => {
          this.contenido2 = dato;
          console.log("contenido2: ");
          console.log(this.contenido2);
          this.nombre = this.contenido2[0].nombrecliente;
          console.log("nombre: " + this.nombre);
          setTimeout(function () {
          }, 5000);
        });
        this.list.push(this.cedula, this.nombre, this.total);
      } resolve(this.list);
      console.log("el nombre es: " + this.nombre);
      console.log("la lista es: ");
      console.log(this.list);
    });
  }
}
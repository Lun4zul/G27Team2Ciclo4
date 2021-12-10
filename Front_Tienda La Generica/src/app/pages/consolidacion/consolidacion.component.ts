import { Component, OnInit } from '@angular/core';
import { LeerService } from 'src/app/servicios/leer.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-consolidacion',
  templateUrl: './consolidacion.component.html',
  styleUrls: ['./consolidacion.component.scss']
})
export class ConsolidacionComponent implements OnInit {

  //opciones y objeto revisor de la tabla
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  res: any;
  contenido: any;
  contenido2: any;
  urlapi: string = "http://localhost:8080/api/consolidados";
  urlapi2: string = "http://localhost:8080/api/ventas";
  totalventas: number = 0;
  ciudad:any;
  valortotal: number = 0.0;

  constructor(private read: LeerService, private read2: LeerService, private router: Router) {
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ngOnInit() {
    this.read.leerTodos(this.urlapi).subscribe(async (data: any[]) => {
      this.contenido = data;
      this.contenido2 = await this.traertotales();
      console.log(this.contenido);
      this.dtTrigger.next(this.dtOptions);
    });

    //Opciones especiales de la tabla, localización y caracteristicas
    this.dtOptions = {
      pagingType: 'full_numbers',
      columns: [
        {
          title: 'Sucursal',
        },
        {
          title: 'Numero total de ventas',
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

  traertotales(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      for (let lista of this.contenido) {
        console.log("Lista " + lista);
        this.ciudad = lista['ciudad'];
        console.log("ciudad" + this.ciudad);
        
        this.read2.leer(this.urlapi2, this.ciudad).subscribe((data: any[]) => {
          this.contenido2 = data;
          this.valortotal = this.contenido2[0].totalVentaConIva;
          setTimeout(function () {
          }, 2000);
          console.log("Segunda funcion");
          console.log("el total es: " + this.valortotal);
        });
      } resolve(this.valortotal);
    });
  }

}
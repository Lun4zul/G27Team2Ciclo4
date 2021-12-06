import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-ventas-xcliente',
  templateUrl: './ventas-xcliente.component.html',
  styleUrls: ['./ventas-xcliente.component.scss']
})
export class VentasXClienteComponent implements OnInit {

  //opciones y objeto revisor de la tabla
dtOptions: DataTables.Settings = {};
dtTrigger: Subject<any> = new Subject<any>();

res:any;
contenido:any;  
urlapi:string="http://localhost:8080/api/ventas";

constructor(private objetohttp:HttpClient){}
ngOnInit(){
  this.res=this.objetohttp.get(this.urlapi);
  this.res.subscribe((data:any[]) => {
      this.contenido = data;
      console.log(this.contenido);
    }
    );
  
    

   //Opciones especiales de la tabla, localización y caracteristicas
   this.dtOptions = {
    pagingType: 'full_numbers',
    columns: [
      {
        title: 'Cedula',
      },
      {
        title: 'Nombre',
      },
      {
        title: 'Valor Total Ventas',
      },
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
}
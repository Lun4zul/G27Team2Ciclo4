import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit {

  
  constructor(private clientehttp: HttpClient, private toastr: ToastrService) { }

  apiURL: string = "http://localhost:8080/api/";

  consecutivo !: any;
  sumatoria: number = 0.0;

  getConsecutivo() {
    this.clientehttp.get(this.apiURL + "ventas/consecutivo").subscribe((data) => {
      this.consecutivo = data;
      if (this.consecutivo == 1){
        this.consecutivo = this.consecutivo;
      }else{
        
      }
      this.consecutivo++;
      console.log(this.consecutivo);
    }
    )
  }

  cedulacliente!: any;
  clientedata: any;
  getCliente() {
    this.clientehttp.get(this.apiURL + "clientes/cedula/" + this.cedulacliente).subscribe((data) => {
      this.clientedata = data;
      console.log(this.clientedata);
    }
    )
  }

  product1: any;
  product2: any;
  product3: any;
  codprod1: any;
  codprod2: any;
  codprod3: any;
  getProducto(numproducto: number) {
    switch (numproducto) {
      case 1:
        this.clientehttp.get(this.apiURL + "productos/codigo/" + this.codprod1)
          .subscribe((data) => {
            this.product1 = data;
            console.log(this.product1);
          });
        break;
      case 2:
        this.clientehttp.get(this.apiURL + "productos/codigo/" + this.codprod2)
          .subscribe((data) => {
            this.product2 = data;
            console.log(this.product2);
          });
        break;
      case 3:
        this.clientehttp.get(this.apiURL + "productos/codigo/" + this.codprod3)
          .subscribe((data) => {
            this.product3 = data;
            console.log(this.product3);
          });
        break;

      default:
        break;
    }
  }

  precioprod1: any;
  cant1: any;
  precioprod2: any;
  cant2: any;
  precioprod3: any;
  cant3: any;
  calcPrecioProd(numproducto: number) {
    switch (numproducto) {
      case 1:
        this.precioprod1 = this.cant1 * this.product1[0].precioventa;
        break;
      case 2:
        this.precioprod2 = this.cant2 * this.product2[0].precioventa;
        break;
      case 3:
        this.precioprod3 = this.cant3 * this.product3[0].precioventa;
        break;

      default:
        break;
    };
    this.calcularTotales();
  }
  totalventa: number = 0.0;
  totalplusiva: number = 0.0;
  totaliva: number = 0.0;
  calcularTotales() {
    this.totalventa = 0.0;
    if (this.precioprod1 != null && this.precioprod1 != undefined
      && this.precioprod1 != "") {
      this.totalventa += this.precioprod1;
      this.totaliva = (this.totalventa) * 0.19;
      this.totalplusiva = this.totalventa + ((this.totalventa) * 0.19);

    }
    if (this.precioprod2 != null && this.precioprod2 != undefined
      && this.precioprod2 != "") {
      this.totalventa += this.precioprod2;
      this.totaliva = (this.totalventa) * 0.19;
      this.totalplusiva = this.totalventa + ((this.totalventa) * 0.19);

    }
    if (this.precioprod3 != null && this.precioprod3 != undefined
      && this.precioprod3 != "") {
      this.totalventa += this.precioprod3;
      this.totaliva = (this.totalventa) * 0.19;
      this.totalplusiva = this.totalventa + ((this.totalventa) * 0.19);

    }

  }

  codigorespuesta: any;
  listadetalleventa = Array();
  ciudad: string = '0';
  postVenta() {
    if (this.precioprod1 != null && this.precioprod1 != undefined && this.precioprod1 != "") {
      let aux = {
        "cantidadProducto": this.cant1,
        "codigoProducto": this.codprod1,
        "ivaVenta": this.precioprod1 * 0.19,
        "totalVenta": this.precioprod1,
        "totalVentaConIva": (this.precioprod1 * 0.19) + this.precioprod1
      }
      this.listadetalleventa.push(aux);

    }
    if (this.precioprod2 != null && this.precioprod2 != undefined && this.precioprod2 != "") {
      let aux = {
        "cantidadProducto": this.cant2,
        "codigoProducto": this.codprod2,
        "ivaVenta": this.precioprod2 * 0.19,
        "totalVenta": this.precioprod2,
        "totalVentaConIva": (this.precioprod2 * 0.19) + this.precioprod2
      }
      this.listadetalleventa.push(aux);

    }
    if (this.precioprod3 != null && this.precioprod3 != undefined && this.precioprod3 != "") {
      let aux = {
        "cantidadProducto": this.cant3,
        "codigoProducto": this.codprod3,
        "ivaVenta": this.precioprod3 * 0.19,
        "totalVenta": this.precioprod3,
        "totalVentaConIva": (this.precioprod3 * 0.19) + this.precioprod3
      }
      this.listadetalleventa.push(aux);

    }
    this.clientehttp.post(this.apiURL + "ventas",
      {
        "cedulaCliente": this.cedulacliente,
        "codigoVenta": this.consecutivo,
        "detalleventa": this.listadetalleventa,
        "ivaVenta": this.totaliva,
        "totalVenta": this.totalventa,
        "totalVentaConIva": this.totalplusiva,
      }, {
      observe: 'response'
    }).subscribe(
      (response: any) => {

        this.codigorespuesta = response.status;

        switch (this.codigorespuesta) {
          case 201:
            this.postConsolidado();
            this.showNotification('top', 'right', 1);
            break;

          case 226:
            this.showNotification('top', 'right', 2);
            break;

          case 500:
            this.showNotification('top', 'right', 3);
            break;

        }

      }
    );


  }
  postConsolidado() {
    console.log(this.ciudad)
    console.log(typeof this.ciudad)
    this.clientehttp.post(this.apiURL + "consolidados/agregar/"+this.ciudad, 
    {
      "ciudad": this.ciudad,
      "totalventas": this.totalplusiva,
    },
    {observe:"response"}
    ).subscribe((response: any) => {

      console.log(response.status)

    });
  }

  showNotification(from, align, type) {
    switch (type) {
      case 1:
        this.toastr.success('<b>Dato creado con exito</b>', '', {
          disableTimeOut: false,
          closeButton: true,
          enableHtml: true,
          toastClass: 'alert alert-success alert-with-icon',
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      case 2:
        this.toastr.warning('<b>El dato se encuentra duplicado', '', {
          disableTimeOut: false,
          enableHtml: true,
          closeButton: true,
          toastClass: 'alert alert-danger alert-with-icon',
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      case 3:
        this.toastr.error('<b>Error del servidor', '', {
          disableTimeOut: false,
          enableHtml: true,
          closeButton: true,
          toastClass: 'alert alert-danger alert-with-icon',
          positionClass: 'toast-' + from + '-' + align
        });
        break;
    }
  }

  reload() {
    window.location.reload()
  }


  ngOnInit(): void {
    this.clientedata = {
      "nombrecliente": ""
    }
    this.product1 = [{
      "nombreproducto": ""
    }]
    this.product2 = [{
      "nombreproducto": ""
    }]
    this.product3 = [{
      "nombreproducto": ""
    }]
    this.getConsecutivo();


  }

}

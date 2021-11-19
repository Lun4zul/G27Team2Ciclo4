import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-consultar',
  templateUrl: './clientes-consultar.component.html',
  styleUrls: ['./clientes-consultar.component.scss']
})
export class ClientesConsultarComponent implements OnInit {
  res: any;
  contenido:any;  
  urlapi:string="";

  constructor(private objetohttp:HttpClient){}



btnClick= function () {
  this.router.navigateByUrl("");
 
}


ngOnInit(){
  this.res=this.objetohttp.get(this.urlapi);
  this.res.subscribe((data:any[]) => {
      this.contenido = data;
      console.log(this.contenido);
    }
    );
  }

  //GET

cedulacliente!: string;
direccioncliente!: string;
emailcliente!: string;
nombrecliente!: string;
telefonocliente!: string;

Enviar!:number;
postData()  {
  this.objetohttp.post<any>(
    "http://localhost:8080/api/clientes",
    {
      cedulacliente: this.cedulacliente,
      direccioncliente: this.direccioncliente,
      emailcliente: this.emailcliente,
      nombrecliente: this.nombrecliente,
      telefonocliente: this.telefonocliente
      
    },{observe:'response'}
  ).subscribe(response=>{
    this.Enviar=response.status;
  });

 }

 
 }

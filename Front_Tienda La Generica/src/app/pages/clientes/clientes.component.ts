import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})

export class ClientesComponent implements OnInit {


res:any;
contenido:any;  
urlapi:string="";

constructor(private objetohttp:HttpClient, router:Router){}



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

  //POST

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

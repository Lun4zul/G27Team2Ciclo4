import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent  {
  title = 'Login';

  listausuarios=["diego","andrea","admin","user"];
  listacontraseñas=["123","234","4545","76767"];

  user_correcto:string="admininicial";
  pass_correcto:string="admin123456";

  user:string="";
  pass:string="";

  correcto:number=-1;
  comparar()  {
    if (this.user===this.user_correcto){
      this.correcto=1;
      if (this.pass==this.pass_correcto){
        this.correcto=1;
      }else{
        this.correcto=0;
      }
    }else{
        this.correcto=0;
    }
  }
}


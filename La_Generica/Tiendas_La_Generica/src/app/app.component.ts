import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  showPassword() {
    
    //change:string="";
    //if(this.change.type == "password"){
      //  this.change.type = "text";
    //}else{
      //  this.change.type = "password";
    //}
}

    //hidePassword(){
      //  change = document.getElementById("inputpass");
      //  if(this.change.type == "text"){
        //    this.change.type = "password";
        //}else{
          //  this.change.type = "text";
        //}
}


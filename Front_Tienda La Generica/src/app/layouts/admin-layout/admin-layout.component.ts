import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "app-admin-layout",
  templateUrl: "./admin-layout.component.html",
  styleUrls: ["./admin-layout.component.scss"]
})
export class AdminLayoutComponent implements OnInit {

  mostrar: boolean = false;

  public sidebarColor: string = "red";

  state: number = 0;

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      //console.log(this.router.url)
      //console.log(val)
      if (this.router.url != "/login") {
        this.state = 1;
      } else {
        this.state = 0;
      }
    });
  }
  
  changeSidebarColor(color){
    var sidebar = document.getElementsByClassName('sidebar')[0];
    var mainPanel = document.getElementsByClassName('main-panel')[0];

    this.sidebarColor = color;

    if(sidebar != undefined){
        sidebar.setAttribute('data',color);
    }
    if(mainPanel != undefined){
        mainPanel.setAttribute('data',color);
    }
  }

  changeDashboardColor(color){
    var body = document.getElementsByTagName('body')[0];
    if (body && color === 'white-content') {
        body.classList.add(color);
    }
    else if(body.classList.contains('white-content')) {
      body.classList.remove('white-content');
    }
  }

  funcion_mostrar() {  
    this.mostrar = !this.mostrar ;
  }

  ngOnInit() {}
}

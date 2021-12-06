import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [

  {
    path: "/dashboard",
    title: "Inicio",
    icon: "tim-icons icon-world",
    class: ""
  },

  {
    path: "/productos",
    title: "Productos",
    icon: "tim-icons icon-cart",
    class: ""
  },

  {
    path: "/clientes",
    title: "Clientes",
    icon: "icon-pin",
    class: "" 
  },

  {
    path: "/ventas",
    title: "Ventas",
    icon: "tim-icons icon-money-coins",
    class: ""
  },

  {
    path: "/reportes",
    title: "Reportes",
    icon: "tim-icons icon-simple-add",
    class: ""
  },

  {
    path: "/consolidacion",
    title: "Consolidación",
    icon: "tim-icons icon-paper",
    class: ""
  },
  

];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {

  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }

  

}

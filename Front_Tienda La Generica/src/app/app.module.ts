import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { LoginComponent } from './pages/login/login.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { ConsolidacionComponent } from './pages/consolidacion/consolidacion.component';
import { ListadoClientesComponent } from './pages/reportes/listado-clientes/listado-clientes.component';
import { VentasXClienteComponent } from './pages/reportes/ventas-xcliente/ventas-xcliente.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
  ],
  
  declarations: [
    AppComponent,
    AdminLayoutComponent, 
    LoginComponent, 
    ProductosComponent, 
    ClientesComponent, 
    VentasComponent, 
    ReportesComponent, 
    ConsolidacionComponent, ListadoClientesComponent, VentasXClienteComponent
  ],
    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

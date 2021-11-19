import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientesActualizarComponent } from './pages/clientes-actualizar/clientes-actualizar.component';
import { ClientesBorrarComponent } from './pages/clientes-borrar/clientes-borrar.component';
import { ClientesConsultarComponent } from './pages/clientes-consultar/clientes-consultar.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
  },
  {
    path: 'clientes',
    redirectTo: 'clientes',
  },
  {
    path:"clientes-actualizar",
    component:ClientesActualizarComponent
  },
  {
    path:"clientes-borrar",
    component:ClientesBorrarComponent
  },
  {
    path:"clientes-consultar",
    component:ClientesConsultarComponent
  },
  
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

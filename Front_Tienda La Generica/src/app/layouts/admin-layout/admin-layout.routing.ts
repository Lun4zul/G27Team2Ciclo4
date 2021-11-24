import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UserComponent } from '../../pages/user/user.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { LoginComponent } from '../../pages/login/login.component';
import { ProductosComponent } from 'src/app/pages/productos/productos.component';
import { ClientesComponent } from 'src/app/pages/clientes/clientes.component';
import { VentasComponent } from 'src/app/pages/ventas/ventas.component';
import { ReportesComponent } from 'src/app/pages/reportes/reportes.component';
import { ConsolidacionComponent } from 'src/app/pages/consolidacion/consolidacion.component';
import { ActualizarComponent } from 'src/app/pages/clientes/actualizar/actualizar.component';
import { CrearComponent } from 'src/app/pages/clientes/crear/crear.component';
import { EliminarComponent } from 'src/app/pages/clientes/eliminar/eliminar.component';
import { ConsultarComponent } from 'src/app/pages/clientes/consultar/consultar.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'ventas', component: VentasComponent },
  { path: 'reportes', component: ReportesComponent },
  { path: 'consolidacion', component: ConsolidacionComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'user', component: UserComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'typography', component: TypographyComponent },
  { path:"clientes/actualizar", component: ActualizarComponent},
  { path:"clientes/eliminar", component: EliminarComponent},
  { path:"clientes/consultar", component: ConsultarComponent},
  { path:"clientes/agregar", component:CrearComponent}
];

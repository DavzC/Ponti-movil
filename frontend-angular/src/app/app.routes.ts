import { Routes } from '@angular/router';
import { HIndexComponent } from './home/h-index/h-index.component';
import { HLoginComponent } from './home/h-login/h-login.component';
import { HRegistrarseComponent } from './home/h-registrarse/h-registrarse.component';
import { ErrorComponent } from './error/error.component';
import { RMenuComponent } from './ruta/r-menu/r-menu.component';
import { HSelectFunctionComponent } from './home/h-select-function/h-select-function.component';
import { REditarRutaComponent } from './ruta/r-editar-ruta/r-editar-ruta.component';
import { BMenuComponent } from './bus/b-menu/b-menu.component';
import { CMenuComponent } from './conductor/c-menu/c-menu.component';

// Importa los guards
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

export const routes: Routes = [
  { path: '', component: HIndexComponent },
  { path: 'h-login', component: HLoginComponent },
  { path: 'h-register', component: HRegistrarseComponent },
  { path: 'h-select-function', component: HSelectFunctionComponent },

  // Rutas protegidas para el Administrador de rutas
  { path: 'r-menu', component: RMenuComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'admin' } },
  { path: 'r-editar-ruta', component: REditarRutaComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'admin' } },

  // Rutas protegidas para el Coordinador
  { path: 'b-menu', component: BMenuComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'coordinador' } },
  { path: 'c-menu', component: CMenuComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'coordinador' } },

  // Rutas para el Pasajero

  { path: '**', component: ErrorComponent }
];

import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';

const routes: Routes = [
  {path: '', component: ClienteListComponent}, //lista todos os clientes
  {path: 'cliente/new', component: ClienteFormComponent}, //cadastra novo cliente
  {path: 'cliente/edit/:id', component: ClienteFormComponent} //editar um cliente
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

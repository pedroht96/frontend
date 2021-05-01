import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { VendaListComponent } from './venda/venda-list/venda-list.component';
import { VendaFormComponent } from './venda/venda-form/venda-form.component';

const routes: Routes = [
  {path: '', component: HomeComponent}, // Home do site, todos os botoes
  {path: 'cliente', component: ClienteListComponent}, // lista todos os clientes
  {path: 'cliente/new', component: ClienteFormComponent}, // cadastra novo cliente
  {path: 'cliente/edit/:id', component: ClienteFormComponent}, // editar um cliente

  {path: 'venda', component: VendaListComponent}, // lista todos as vendas
  {path: 'venda/new', component: VendaFormComponent}, // cadastra nova venda
  {path: 'venda/edit/:id', component: VendaFormComponent} // editar uma venda

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

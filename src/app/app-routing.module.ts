import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { VendaListComponent } from './venda/venda-list/venda-list.component';
import { VendaFormComponent } from './venda/venda-form/venda-form.component';
import { FuncionarioFormComponent } from './funcionarios/funcionario-form/funcionario-form.component';
import { FuncionarioListComponent } from './funcionarios/funcionario-list/funcionario-list.component';
import { ProdutoFormComponent } from './produto/produto-form/produto-form.component';
import { ProdutoListComponent } from './produto/produto-list/produto-list.component';

import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { LoginComponent } from './account/login/login.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { AuthGuard } from './account/shared/auth.guard';

const routes: Routes = [
{path: 'produto', component: ProdutoListComponent},
  {path: '',
  component: HomeComponent,
  children: [
    {path: 'cliente', component: ClienteListComponent}, // lista todos os clientes
    {path: 'cliente/new', component: ClienteFormComponent}, // cadastra novo cliente
    {path: 'cliente/edit/:id', component: ClienteFormComponent}, // editar um cliente

    {path: 'venda', component: VendaListComponent}, // lista todos as vendas
    {path: 'venda/new', component: VendaFormComponent}, // cadastra nova venda
    {path: 'venda/edit/:id', component: VendaFormComponent}, // editar uma venda

    {path: 'funcionario', component: FuncionarioListComponent}, // lista todos os funcionario
    {path: 'funcionario/new', component: FuncionarioFormComponent}, // cadastra novo funcionario
    {path: 'funcionario/edit/:id', component: FuncionarioFormComponent}, // editar um funcionario

    {path: 'produto', component: ProdutoListComponent}, // lista todos os produto
    {path: 'produto/new', component: ProdutoFormComponent}, // cadastra nova venda
    {path: 'produto/edit/:id', component: ProdutoFormComponent}, // editar uma venda
  ],
  canActivate : [AuthGuard], 
  
}, // Home do site, todos os botoes
{path: '',
component : AuthenticationComponent,
children:[

  {path:'',
  redirectTo:'login',
  pathMatch: 'full'
},

{path:'login',
component: LoginComponent
},

{path:'create-account',
component: CreateAccountComponent
}
]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

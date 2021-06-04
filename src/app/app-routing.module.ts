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
import { PromocaoListComponent } from './promocao/produto-list/produto-list.component';

const routes: Routes = [

{path: '',
  component: HomeComponent,
  canActivate : [AuthGuard],

}, // Home do site, todos os botoes

{path: 'cliente', component: ClienteListComponent, canActivate : [AuthGuard],}, // lista todos os clientes
{path: 'cliente/new', component: ClienteFormComponent, canActivate : [AuthGuard],}, // cadastra novo cliente
{path: 'cliente/edit/:id', component: ClienteFormComponent, canActivate : [AuthGuard],}, // editar um cliente

{path: 'venda', component: VendaListComponent, canActivate : [AuthGuard],}, // lista todos as vendas
{path: 'venda/new', component: VendaFormComponent,canActivate : [AuthGuard],}, // cadastra nova venda
{path: 'venda/edit/:id', component: VendaFormComponent,canActivate : [AuthGuard],}, // editar uma venda

{path: 'funcionario', component: FuncionarioListComponent,canActivate : [AuthGuard],}, // lista todos os funcionario
{path: 'funcionario/new', component: FuncionarioFormComponent, canActivate : [AuthGuard],}, // cadastra novo funcionario
{path: 'funcionario/edit/:id', component: FuncionarioFormComponent, canActivate : [AuthGuard]}, // editar um funcionario

{path: 'produto', component: ProdutoListComponent, canActivate : [AuthGuard],}, // lista todos os produto
{path: 'produto/new', component: ProdutoFormComponent, canActivate : [AuthGuard],}, // cadastra nova venda
{path: 'produto/edit/:id', component: ProdutoFormComponent, canActivate : [AuthGuard],}, // editar uma venda

{path: 'promocao', component: PromocaoListComponent, canActivate : [AuthGuard],}, // lista todos os produtos em promocao


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

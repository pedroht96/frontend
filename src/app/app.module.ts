
import { LoginComponent } from './account/login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { ClienteListItemComponent } from './cliente/cliente-list-item/cliente-list-item.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './layout/home/home.component';

import { VendaFormComponent } from './venda/venda-form/venda-form.component';
import { VendaListComponent } from './venda/venda-list/venda-list.component';
import { VendaListItemComponent } from './venda/venda-list-item/venda-list-item.component';
import { FuncionarioListItemComponent } from './funcionarios/funcionario-list-item/funcionario-list-item.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { FuncionarioFormComponent } from './funcionarios/funcionario-form/funcionario-form.component';
import { FuncionarioListComponent } from './funcionarios/funcionario-list/funcionario-list.component';
import { ProdutoFormComponent } from './produto/produto-form/produto-form.component';
import { ProdutoListComponent } from './produto/produto-list/produto-list.component';
import { ProdutoListItemComponent } from './produto/produto-list-item/produto-list-item.component';

import { CreateAccountComponent } from './account/create-account/create-account.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';

import { httpInterceptorProviders } from './http-interceptors/index';
import { NgxMaskModule } from 'ngx-mask';

import { PromocaoListComponent } from './promocao/produto-list/produto-list.component';
import { PromocaoListItemComponent } from './promocao/produto-list-item/produto-list-item.component';



@NgModule({
  declarations: [
    AppComponent,

    ClienteListComponent,
    ClienteListItemComponent,
    ClienteFormComponent,
    VendaFormComponent,
    VendaListComponent,
    VendaListItemComponent,
    FuncionarioFormComponent,
    FuncionarioListComponent,
    FuncionarioListItemComponent,
    ProdutoFormComponent,
    ProdutoListComponent,
    ProdutoListItemComponent,
    PromocaoListComponent,
    PromocaoListItemComponent,
    HomeComponent,

    LoginComponent,

    CreateAccountComponent,
    AuthenticationComponent,



  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),

    AppRoutingModule
  ],
  providers: [
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

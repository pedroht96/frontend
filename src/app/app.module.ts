import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { ClienteListItemComponent } from './cliente/cliente-list-item/cliente-list-item.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home/home.component';
import { VendaFormComponent } from './venda/venda-form/venda-form.component';
import { VendaListComponent } from './venda/venda-list/venda-list.component';
import { VendaListItemComponent } from './venda/venda-list-item/venda-list-item.component';
import { FuncionarioListItemComponent } from './funcionarios/funcionario-list-item/funcionario-list-item.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { FuncionarioFormComponent } from './funcionarios/funcionario-form/funcionario-form.component';
import { FuncionarioListComponent } from './funcionarios/funcionario-list/funcionario-list.component';

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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

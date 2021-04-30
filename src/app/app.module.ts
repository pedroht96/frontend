import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { ClienteListItemComponent } from './cliente/cliente-list-item/cliente-list-item.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteListComponent,
    ClienteListItemComponent,
    ClienteFormComponent,
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

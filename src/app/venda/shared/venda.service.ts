import { AppRoutingModule } from './../../app-routing.module';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Venda } from './venda';

@Injectable({
  providedIn: 'root'
})
export class VendaService {
  venda: Venda[] = [];

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getAll() {
   // consumo MongoDB
    return this.http.get<Venda[]>(`${environment.api}/venda`);
  }

  // tslint:disable-next-line: typedef
  getById(id: string){
    // consumo MongoDB
    return this.http.get<Venda>(`${environment.api}/venda/${id}`);
  }



  save(venda: Venda){

// consumo MongoDB

const vendaBody = {

  id_cliente: venda.id_cliente,
  id_funcionario: venda.id_funcionario,
  id_produto: venda.id_produto,
  preço: venda.preco

};

if(venda._id){
  return this.http.patch<Venda>(`${environment.api}/venda/${venda._id}`,vendaBody);
}else{
  return this.http.post<Venda>(`${environment.api}/venda/`,vendaBody);
}

  }


delete(id:string){

// consumo MongoDB
return this.http.delete<Venda>(`${environment.api}/venda/${id}`);

}


}

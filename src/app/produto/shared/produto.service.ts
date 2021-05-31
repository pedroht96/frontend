import { AppRoutingModule } from '../../app-routing.module';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  produto: Produto[] = [];

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getAll() {
    // consumo de banco interno testes.
   // return this.produto;

   // consumo MongoDB
    return this.http.get<Produto[]>(`${environment.api}/produto`);
  }

  // tslint:disable-next-line: typedef
  getById(id: string){
     // consumo MongoDB
    return this.http.get<Produto>(`${environment.api}/produto/${id}`);
  }


  save(produto: Produto){


// consumo MongoDB

const produtoBody = {

  nome: produto.nome,
  preco: produto.preco,
  quantidade: produto.quantidade,
  promocao: produto.promocao,


};

if(produto._id){
  return this.http.patch<Produto>(`${environment.api}/produto/${produto._id}`,produtoBody);
}else{
  return this.http.post<Produto>(`${environment.api}/produto/`,produtoBody);
}

  }


delete(id:string){

  // consumo de banco interno testes.
  /*
  const produtoIndex = this.produto.findIndex((value) => value._id == id);
  this.produto.splice(produtoIndex, 1)
  */

// consumo MongoDB
return this.http.delete<Produto>(`${environment.api}/produto/${id}`);

}


}

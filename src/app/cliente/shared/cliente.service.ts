import { AppRoutingModule } from './../../app-routing.module';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  cliente: Cliente[] = [
    // banco interno de testes.
/*
    { _id: 1,
      nome: 'heberth',
      cpf: '12345678963',
      dataNascimento: '08/07/2003',
      endereco: 'rua A' },

      {  _id: 2,
        nome: 'heberth2',
        cpf: '12345678963',
        dataNascimento: '08/07/1997',
        endereco: 'rua B' },
        */
  ];

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getAll() {
    // consumo de banco interno testes.
   // return this.cliente;

   // consumo MongoDB
    return this.http.get<Cliente[]>(`${environment.api}/cliente`);
  }

  // tslint:disable-next-line: typedef
  getById(id: string){
    // consumo de banco interno testes.
    /* const cliente = this.cliente.find((value) => value._id == id);
    return cliente; */

    // consumo MongoDB
    return this.http.get<Cliente>(`${environment.api}/cliente/${id}`);
  }


  save(cliente: Cliente){
    // consumo de banco interno testes.
/*    if(cliente._id){
      const clienteArr = this.getById(cliente._id) || cliente; // ||cliente adicionado por erro, verificar impacto
      clienteArr.cpf = cliente.cpf ;
      clienteArr.dataNascimento = cliente.dataNascimento ;
      clienteArr.endereco = cliente.endereco;
      clienteArr.nome = cliente.nome;
    }
else{
  const lastId = this.cliente[this.cliente.length-1]._id;
  cliente._id = lastId + 1;
  this.cliente.push(cliente);
}*/

// consumo MongoDB

const clienteBody = {

  nome: cliente.nome,
  cpf: cliente.cpf,
  dataNascimento: cliente.dataNascimento,
  endereco: cliente.endereco

};

if(cliente._id){
  return this.http.patch<Cliente>(`${environment.api}/cliente/${cliente._id}`,clienteBody);
}else{
  return this.http.post<Cliente>(`${environment.api}/cliente/`,clienteBody);
}

  }


delete(id:string){

  // consumo de banco interno testes.
  /*
  const clienteIndex = this.cliente.findIndex((value) => value._id == id);
  this.cliente.splice(clienteIndex, 1)
  */

// consumo MongoDB
return this.http.delete<Cliente>(`${environment.api}/cliente/${id}`);

}


}

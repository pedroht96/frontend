import { Injectable } from '@angular/core';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  cliente: Cliente[] = [

    { id: 1,
      nome: 'heberth',
      cpf: '12345678963',
      dataNascimento: '08/07/1993',
      endereco: 'rua da abobrinha' },

      {  id: 2,
        nome: 'heberth2',
        cpf: '12345678963',
        dataNascimento: '08/07/1997',
        endereco: 'rua da abobrinha2' },
  ];

  constructor() { }

  // tslint:disable-next-line: typedef
  getAll() {
   return this.cliente;
  }

  // tslint:disable-next-line: typedef
  getById(id: number){
    const cliente = this.cliente.find((value) => value.id == id);
    return cliente;
  }

  save(cliente: Cliente){
    if(cliente.id){
      const clienteArr = this.getById(cliente.id) || cliente; // ||cliente adicionado por erro, verificar impacto
      clienteArr.cpf = cliente.cpf ;
      clienteArr.dataNascimento = cliente.dataNascimento ;
      clienteArr.endereco = cliente.endereco;
      clienteArr.nome = cliente.nome;
    }
else{
  const lastId = this.cliente[this.cliente.length-1].id;
  cliente.id = lastId + 1;
  this.cliente.push(cliente);
}
  }
delete(id:number){
  const clienteIndex = this.cliente.findIndex((value) => value.id == id);
  this.cliente.splice(clienteIndex, 1)
}


}

import { Injectable } from '@angular/core';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  cliente: Cliente[]=[

    { id: '1',
      nome: heberth,
      cpf: 12345678963,
      dataNascimento: 08/07/1993,
      endereco: rua da abobrinha },

      {  id: 2,
        nome: heberth2,
        cpf: 12345678963,
        dataNascimento: 08/07/1997,
        endereco: rua da abobrinha2 },
  ];

  constructor() { }
  getAll()
   { return this.cliente}
}

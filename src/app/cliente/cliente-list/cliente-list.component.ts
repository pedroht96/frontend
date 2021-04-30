import { Cliente } from './../shared/cliente';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from './../shared/cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
  clientes: Cliente[] = [];
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getAll().subscribe(cliente =>{
      this.clientes = cliente;
    });
  }

  onClienteDelete(cliente: Cliente){
    if(cliente){
        const index = this.clientes.findIndex((clienteItem) => clienteItem._id == cliente._id);
        this.clientes.splice(index,1);
    }

  }

}

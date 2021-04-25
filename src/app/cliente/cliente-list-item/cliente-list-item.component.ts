import { Cliente } from './../shared/cliente';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../shared/cliente.service';

@Component({
  selector: 'app-cliente-list-item',
  templateUrl: './cliente-list-item.component.html',
  styleUrls: ['./cliente-list-item.component.css']
})
export class ClienteListItemComponent implements OnInit {
 cliente: Cliente[]=[]
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void{
  }

}

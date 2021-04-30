
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cliente } from '../shared/cliente';
import { ClienteService } from '../shared/cliente.service';


@Component({
  selector: 'app-cliente-list-item',
  templateUrl: './cliente-list-item.component.html',
  styleUrls: ['./cliente-list-item.component.css']
})
export class ClienteListItemComponent implements OnInit {
 @Input()
  cliente!: Cliente;

@Output()
  onDeleteCliente = new EventEmitter();

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void{

  }

  remove(cliente: Cliente){
    this.clienteService.delete(cliente._id).subscribe(()=> {
      this.onDeleteCliente.emit(cliente);
    });
  }

}

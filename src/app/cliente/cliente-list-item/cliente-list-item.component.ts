
import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '../shared/cliente';


@Component({
  selector: 'app-cliente-list-item',
  templateUrl: './cliente-list-item.component.html',
  styleUrls: ['./cliente-list-item.component.css']
})
export class ClienteListItemComponent implements OnInit {
 @Input()
  cliente!: Cliente;

  constructor() { }

  ngOnInit(): void{

  }

}

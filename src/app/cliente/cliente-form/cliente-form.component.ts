import { Cliente } from './../shared/cliente';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from '../shared/cliente.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  cliente: Cliente = new Cliente();
  title: string = 'Novo Cliente';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id){

      this.cliente = this.clienteService.getById(parseInt(id)) || this.cliente ; // this.cliente incluido por erro, verificar impacto futuro.
      this.title = 'Alterando tarefa';
    }
  }

  onSubmit(){}

}

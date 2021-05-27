

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Venda } from './../shared/venda';
import { VendaService } from '../shared/venda.service';
import { Cliente } from 'src/app/cliente/shared/cliente';
import { ClienteService } from 'src/app/cliente/shared/cliente.service';
import { Produto } from 'src/app/produto/shared/produto';
import { ProdutoService} from 'src/app/produto/shared/produto.service';
import { Funcionario } from 'src/app/funcionarios/shared/funcionario';
import { FuncionarioService } from 'src/app/funcionarios/shared/funcionario.service';
@Component({
  selector: 'app-venda-form',
  templateUrl: './venda-form.component.html',
  styleUrls: ['./venda-form.component.css']
})
export class VendaFormComponent implements OnInit {

  venda: Venda = new Venda();
  title = 'Novo Venda';
  cliente!: Cliente[];
  funcionario!: Funcionario[];
  produto!: Produto[];


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService,
    private vendaService: VendaService,
    private produtoService: ProdutoService,
    private funcionarioService: FuncionarioService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id){

      this.vendaService.getById(id).subscribe(venda => {
        this.venda = venda;
        this.title = 'Alterando Venda';
      }) ;

    }

    this.clienteService.getAll().subscribe(cliente => {
      this.cliente = cliente;
    });

    this.produtoService.getAll().subscribe(produto => {
      this.produto = produto;
    });

    this.funcionarioService.getAll().subscribe(funcionario => {
      this.funcionario = funcionario;
    });



  }


  onSubmit(){

    this.vendaService.save(this.venda).subscribe(venda => {
      console.log(venda);
      this.router.navigate(['/venda']);
    });

  }

}

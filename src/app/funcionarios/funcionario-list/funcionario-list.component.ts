import { Funcionario } from './../shared/funcionario';
import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../shared/funcionario.service';

@Component({
  selector: 'app-funcionario-list',
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.css']
})
export class FuncionarioListComponent implements OnInit {
  funcionarios: Funcionario[] = [];
  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.funcionarioService.getAll().subscribe(funcionario =>{
      this.funcionarios = funcionario;
    });
  }

  onFuncionarioDelete(funcionario: Funcionario){
    if(funcionario){
        const index = this.funcionarios.findIndex((funcionarioItem) => funcionarioItem._id == funcionario._id);
        this.funcionarios.splice(index,1);
    }

  }

}

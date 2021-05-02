
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Funcionario } from '../shared/funcionario';
import { FuncionarioService } from '../shared/funcionario.service';


@Component({
  selector: 'app-funcionario-list-item',
  templateUrl: './funcionario-list-item.component.html',
  styleUrls: ['./funcionario-list-item.component.css']
})
export class FuncionarioListItemComponent implements OnInit {
 @Input()
  funcionario!: Funcionario;

@Output()
  onDeleteFuncionario = new EventEmitter();

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void{

  }

  remove(funcionario: Funcionario){
    this.funcionarioService.delete(funcionario._id).subscribe(()=> {
      this.onDeleteFuncionario.emit(funcionario);
    });
  }

}

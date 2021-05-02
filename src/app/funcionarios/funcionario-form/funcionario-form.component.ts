import { Funcionario } from '../shared/funcionario';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FuncionarioService } from '../shared/funcionario.service';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent implements OnInit {

  funcionario: Funcionario = new Funcionario();
  title = 'Novo Funcionario';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private funcionarioService: FuncionarioService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id){

      this.funcionarioService.getById(id).subscribe(funcionario => {
        this.funcionario = funcionario;
        this.title = 'Alterando tarefa';
      }) ;

    }
  }

  // tslint:disable-next-line: typedef
  onSubmit(){
    // tslint:disable-next-line: deprecation
    this.funcionarioService.save(this.funcionario).subscribe(funcionario => {
      console.log(funcionario);
      this.router.navigate(['/funcionario']);
    });

  }

}

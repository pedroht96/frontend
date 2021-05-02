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
  title = 'Novo Cliente';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id){

      this.clienteService.getById(id).subscribe(cliente => {
        this.cliente = cliente;
        this.title = 'Alterando Cliente';
      }) ;

    }
  }

  // tslint:disable-next-line: typedef
  onSubmit(){
    // tslint:disable-next-line: deprecation
    this.clienteService.save(this.cliente).subscribe(cliente => {
      console.log(cliente);
      this.router.navigate(['/cliente']);
    });

  }

}

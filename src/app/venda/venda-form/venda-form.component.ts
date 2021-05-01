import { Venda } from './../shared/venda';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VendaService } from '../shared/venda.service';
import { Cliente } from 'src/app/cliente/shared/cliente';
import { ClienteService } from 'src/app/cliente/shared/cliente.service';
@Component({
  selector: 'app-venda-form',
  templateUrl: './venda-form.component.html',
  styleUrls: ['./venda-form.component.css']
})
export class VendaFormComponent implements OnInit {

  venda: Venda = new Venda();
  title = 'Novo Venda';
  cliente!: Cliente[];


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService,
    private vendaService: VendaService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id){

      this.vendaService.getById(id).subscribe(venda => {
        this.venda = venda;
        this.title = 'Alterando Venda';
      }) ;

    }

    this.clienteService.getAll().subscribe(cliente =>{
      this.cliente = cliente;
    });




  }

  // tslint:disable-next-line: typedef
  onSubmit(){
    // tslint:disable-next-line: deprecation
    this.vendaService.save(this.venda).subscribe(venda => {
      console.log(venda);
      this.router.navigate(['/venda']);
    });

  }

}

import { Venda } from './../shared/venda';
import { Component, OnInit } from '@angular/core';
import { VendaService } from './../shared/venda.service';

@Component({
  selector: 'app-venda-list',
  templateUrl: './venda-list.component.html',
  styleUrls: ['./venda-list.component.css']
})
export class VendaListComponent implements OnInit {
  vendas: Venda[] = [];
  constructor(private vendaService: VendaService) { }

  ngOnInit(): void {
    this.vendaService.getAll().subscribe(venda =>{
      this.vendas = venda;
    });
  }

  onVendaDelete(venda: Venda){
    if(venda){
        const index = this.vendas.findIndex((vendaItem) => vendaItem._id == venda._id);
        this.vendas.splice(index,1);
    }

  }

}

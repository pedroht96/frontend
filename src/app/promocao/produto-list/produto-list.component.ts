import { Produto } from '../shared/produto';
import { Component, OnInit } from '@angular/core';
import { PromocaoService } from '../shared/promocao.service';

@Component({
  selector: 'app-promocao-list',
  templateUrl: '../../promocao/produto-list/produto-list.component.html',
  styleUrls: ['../../promocao/produto-list/produto-list.component.css']
})
export class PromocaoListComponent implements OnInit {
  produtos: Produto[] = [];
  constructor(private promocaoService: PromocaoService) { }

  ngOnInit(): void {
    this.promocaoService.getAll().subscribe(produto =>{
      this.produtos = produto;
    });
  }

  onProdutoDelete(produto: Produto){
    if(produto){
        const index = this.produtos.findIndex((produtoItem) => produtoItem._id == produto._id);
        this.produtos.splice(index,1);
    }

  }

}

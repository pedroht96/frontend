import { Produto } from '../shared/produto';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../shared/produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {
  produtos: Produto[] = [];
  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.getAll().subscribe(produto =>{
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

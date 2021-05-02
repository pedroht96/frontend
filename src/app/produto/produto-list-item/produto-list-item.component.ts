
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from '../shared/produto';
import { ProdutoService } from '../shared/produto.service';


@Component({
  selector: 'app-produto-list-item',
  templateUrl: './produto-list-item.component.html',
  styleUrls: ['./produto-list-item.component.css']
})
export class ProdutoListItemComponent implements OnInit {
 @Input()
  produto!: Produto;

@Output()
  onDeleteProduto = new EventEmitter();

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void{

  }

  remove(produto: Produto){
    this.produtoService.delete(produto._id).subscribe(()=> {
      this.onDeleteProduto.emit(produto);
    });
  }

}

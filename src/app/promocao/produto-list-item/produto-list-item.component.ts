
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from '../shared/produto';
import { PromocaoService } from '../shared/promocao.service';


@Component({
  selector: 'app-promocao-list-item',
  templateUrl: '../../promocao/produto-list-item/produto-list-item.component.html',
  styleUrls: ['../../promocao/produto-list-item/produto-list-item.component.css']
})
export class PromocaoListItemComponent implements OnInit {
 @Input()
  produto!: Produto;

@Output()
  onDeleteProduto = new EventEmitter();

  constructor(private promocaoService: PromocaoService) { }

  ngOnInit(): void{

  }

  remove(produto: Produto){
    this.promocaoService.delete(produto._id).subscribe(()=> {
      this.onDeleteProduto.emit(produto);
    });
  }

}

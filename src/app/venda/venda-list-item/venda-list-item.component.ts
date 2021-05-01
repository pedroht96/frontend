
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Venda } from '../shared/venda';
import { VendaService } from '../shared/venda.service';


@Component({
  selector: 'app-venda-list-item',
  templateUrl: './venda-list-item.component.html',
  styleUrls: ['./venda-list-item.component.css']
})
export class VendaListItemComponent implements OnInit {
 @Input()
  venda!: Venda;

// tslint:disable-next-line: no-output-on-prefix
@Output()
  onDeleteVenda = new EventEmitter();

  constructor(private vendaService: VendaService) { }

  ngOnInit(): void{

  }

  // tslint:disable-next-line: typedef
  remove(venda: Venda){
    this.vendaService.delete(venda._id).subscribe(()=> {
      this.onDeleteVenda.emit(venda);
    });
  }

}

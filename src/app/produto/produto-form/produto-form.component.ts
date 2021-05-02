import { Produto } from '../shared/produto';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../shared/produto.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {

  produto: Produto = new Produto();
  title = 'Novo Produto';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id){

      this.produtoService.getById(id).subscribe(produto => {
        this.produto = produto;
        this.title = 'Alterando Cliente';
      }) ;

    }
  }

  // tslint:disable-next-line: typedef
  onSubmit(){
    // tslint:disable-next-line: deprecation
    this.produtoService.save(this.produto).subscribe(produto => {
      console.log(produto);
      this.router.navigate(['/produto']);
    });

  }

}

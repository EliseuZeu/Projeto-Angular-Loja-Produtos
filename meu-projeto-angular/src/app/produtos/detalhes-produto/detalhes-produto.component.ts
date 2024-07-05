import { ActivatedRoute } from '@angular/router';
import { IProduto } from '../../produtos';
import { ProdutosService } from './../../produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrl: './detalhes-produto.component.css'
})
export class DetalhesProdutoComponent implements OnInit {
  produto: IProduto | undefined;

  constructor(
  private ProdutosService: ProdutosService,
  private route: ActivatedRoute
 ){}

 ngOnInit(): void {
     const routeParams = this.route.snapshot.paramMap;
     const produtoId = Number(routeParams.get("id"));
     this.produto = this.ProdutosService.getOne(produtoId);
 }
}

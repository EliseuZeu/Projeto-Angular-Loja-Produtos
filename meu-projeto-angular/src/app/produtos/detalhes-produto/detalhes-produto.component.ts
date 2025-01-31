import { CarrinhoService } from './../../carrinho.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificacaoService } from '../../notificacao.service';
import { IProduto, IProdutoCarrinho } from '../../produtos';
import { ProdutosService } from './../../produtos.service';
import { privateDecrypt } from 'crypto';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrl: './detalhes-produto.component.css'
})
export class DetalhesProdutoComponent implements OnInit {
  produto: IProduto | undefined;
  quantidade = 1;

  constructor(
  private ProdutosService: ProdutosService,
  private route: ActivatedRoute,
  private notificacaoService: NotificacaoService,
  private CarrinhoService: CarrinhoService
){}

 ngOnInit(): void {
     const routeParams = this.route.snapshot.paramMap;
     const produtoId = Number(routeParams.get("id"));
     this.produto = this.ProdutosService.getOne(produtoId);
 }

 adicionarAoCarrinho() {
    this.notificacaoService.notificar("O produto foi adicionado ao carrinho");
    const produto: IProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade
    }
    this.CarrinhoService.adicionarAoCarrinho(produto)
  }

}

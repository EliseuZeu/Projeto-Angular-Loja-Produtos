import { RouterModule } from '@angular/router';
import { IProdutoCarrinho } from '../produtos';
import { CarrinhoService } from './../carrinho.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent implements OnInit{
  itensCarrinho: IProdutoCarrinho[] =[];
  total = 0;

  constructor(
    public CarrinhoService: CarrinhoService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.itensCarrinho = this.CarrinhoService.obterCarrinho();
    this.calcularTotal();
  }

  calcularTotal() {
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0)
  }

  removeProdutoCarrinho(produtoId: number) {
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.CarrinhoService.removerProdutoCarrinho(produtoId);
    this.calcularTotal();
  }

  comprar() {
    alert("Parabens. voce finalizaou a sua comprar");
    this.CarrinhoService.limparCarrinho();
    this.route.navigate(['/produtos']);
  }
}

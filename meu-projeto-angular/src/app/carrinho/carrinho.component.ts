import { IProdutoCarrinho } from '../produtos';
import { CarrinhoService } from './../carrinho.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent implements OnInit{
  itensCarrinho: IProdutoCarrinho[] =[];
  constructor(
    public CarrinhoService: CarrinhoService
  ) {}

  ngOnInit(): void {
    this.itensCarrinho = this.CarrinhoService.obterCarrinho();

  }
}

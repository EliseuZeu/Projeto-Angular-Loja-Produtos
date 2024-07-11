import { CarrinhoService } from './../carrinho.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


    constructor(
      public CarrinhoService: CarrinhoService
    ){}
}

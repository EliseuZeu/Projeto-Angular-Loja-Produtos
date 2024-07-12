import { CarrinhoService } from './../carrinho.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  implements OnInit{


    constructor(
      public CarrinhoService: CarrinhoService
    ){}

    ngOnInit(): void {

    }
}

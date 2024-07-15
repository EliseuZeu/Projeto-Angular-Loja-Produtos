import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  formContato = this.fb.group({
  nome: []
  });


  constructor(
    private fb: FormBuilder
  ) {}
}

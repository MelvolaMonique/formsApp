import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {

formProduto: FormGroup;


  constructor(private formBuilder: FormBuilder) {
    this.formProduto = this.formBuilder.group({
      nome: ['',Validators.compose([Validators.required, Validators.minLength(3)])],
      descricao: ['', Validators.compose([Validators.required,])],
      validade:  ['', Validators.compose([Validators.required,])],
      preco: ['', Validators.compose([Validators.required,])],
    });
  }
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produto } from '../models/produto';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {

formProduto: FormGroup;
produto: Produto = new Produto();

mensagens = {
  nome: [
    {tipo: 'required', mensagem : 'O campo nome é obrigatório!'}
  ],
  descricao: [
    {tipo: 'required', mensagem: 'A descrição é necessária'}
  ],
  validade: [{
    tipo: 'required', mensagem: 'A validade é necessária'
  }],
  preco: [{
    tipo: 'required', mensagem: 'O preço é necessário'
  }]
};


  constructor(private formBuilder: FormBuilder, private storageService: StorageService, private route: Router) {
    this.formProduto = this.formBuilder.group({
      nome: ['',Validators.compose([Validators.required, Validators.minLength(3)])],
      descricao: ['', Validators.compose([Validators.required,])],
      validade:  ['', Validators.compose([Validators.required,])],
      preco: ['', Validators.compose([Validators.required,])],
    });
  }
  ngOnInit() {

  }

   async salvarProduto(){
  if(this.formProduto.valid){
    this.produto.nome = this.formProduto.value.nome;
    this.produto.descricao = this.formProduto.value.descricao;
    this.produto.validade = this.formProduto.value.validade;
    this.produto.preco = this.formProduto.value.preco;
    await this.storageService.set(this.produto.preco, this.produto);
    this.route.navigateByUrl('/tabs/tab1');
  } else{
    alert('Formulário Inválido!');
  }
  }
}

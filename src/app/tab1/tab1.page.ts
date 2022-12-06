
import { StorageService } from './../services/storage.service';
import { Component } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listaUsuarios: Usuario[] = [];
  listaProdutos: Produto[] = [];

  constructor(private storageService: StorageService) {}

  async buscarProdutos() {
    this.listaProdutos = await this.storageService.getAll();

  }
async buscarUsuarios(){
  this.listaUsuarios = await this.storageService.getAll();
}

ionViewDidEnter(){
  this.buscarUsuarios();
  this.buscarProdutos();
}
 async excluirCadastro(email: string){
 await this.storageService.remove(email);
 this.buscarUsuarios();
}
async excluirProdutos(preco: string){
  await this.storageService.remove(preco);
  this.buscarProdutos();
 }
}



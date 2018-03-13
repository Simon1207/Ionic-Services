import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {ProductoProvider} from "../../providers/producto/producto";
import {PorCategoriasPage}from "../index.paginas";

@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  porCategorias=PorCategoriasPage;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private _ps:ProductoProvider) {
  }

 

}

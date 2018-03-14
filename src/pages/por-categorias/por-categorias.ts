import { ProductoPage } from './../producto/producto';
import { ProductoProvider } from './../../providers/producto/producto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-por-categorias',
  templateUrl: 'por-categorias.html',
})
export class PorCategoriasPage {
productoPage=ProductoPage;

categoria:any={}
  constructor(public navCtrl: NavController, public navParams: NavParams,
  private _ps:ProductoProvider) {
    console.log(this.navParams.get("categoria"));
    this.categoria=this.navParams.get("categoria");
    console.log("categoria.id");
    this._ps.cargar_por_categoria(this.categoria.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PorCategoriasPage');
  }

}

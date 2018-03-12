import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ProductoProvider} from "../../providers/producto/producto";
import {ProductoPage} from "../producto/producto";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

productoPage=ProductoPage;

  constructor(public navCtrl: NavController,
              private _ps:ProductoProvider) {



  }

  siguiente_pagina(infiniteScroll){
    this._ps.cargar_todos()
        .then(()=>{
          infiniteScroll.complete();
        })
  }

}

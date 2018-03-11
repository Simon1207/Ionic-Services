import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ProductoProvider} from "../../providers/producto/producto";;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

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

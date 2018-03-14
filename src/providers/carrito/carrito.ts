import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import {AlertController} from 'ionic-angular';

@Injectable()
export class CarritoProvider {
items:any[]=[];

  constructor(public http: HttpClient,
  private alertCtrl:AlertController) {
    console.log('Hello CarritoProvider Provider');
  }

  agregar_carrito(item_parametro:any){
    for(let item of this.items){
      if(item.codigo==item_parametro.codigo){
        this.alertCtrl.create({
          title:"Item existe",
          subTitle: item_parametro.producto+", ya se encuentra en su carrito de compras",
          buttons:["Ok"]
        }).present();
        return;
      }
    }
    this.items.push(item_parametro);
  }

}

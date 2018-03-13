import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {URL_SERVICIOS} from "../../config/url.servicios";

@Injectable()
export class ProductoProvider {

//Pagina permite indexar con la URL_serivicios para mostrar diferente informacion
pagina:number=0;
//Arreglo que almacenara los productos obtenidos por get de la url_serivicos
productos:any[]=[];
lineas:any[]=[];

  constructor(public http: HttpClient) {
    console.log('Hello ProductoProvider Provider');
    //llamo la funcion cargar todos
    this.cargar_todos();
    //llamo la funcion cargar lineas
    this.cargar_lineas();
  }

  cargar_lineas(){
    let url=URL_SERVICIOS+"/lineas";
    this.http.get(url).subscribe(data=>{
        if(data['error']){
          console.log("ERROR EN :"+URL_SERVICIOS+"/lineas");
        }else{
        console.log(data);
        this.lineas.push(...data['lineas']);
    }
    });
             
             
  }

  cargar_todos(){
    //creo una promesa
    let promesa=new Promise((resolve,reject)=>{

      //concateno la url con el path que usare para obtener los datos espesificos
      let url=URL_SERVICIOS+"/productos/todos/"+this.pagina;
      //Hago una peticion get a la url y muestro el resultado en una variable res
      this.http.get(url).subscribe(res =>{
          console.log(res);
          if(res['error']){
            //aqui hay un error
          }else{
            //obtengo el campo productos del json recibido por get de la url
            this.productos.push(...res['productos']);
            //funcion que incrementa cuando sea la siguiente pagina
            this.pagina = this.pagina + 1;
          }
          //termino de cargar la data
          resolve();

      })

    });

    return promesa;



  }

}

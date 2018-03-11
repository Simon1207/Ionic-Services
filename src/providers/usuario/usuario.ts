import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UsuarioProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UsuarioProvider Provider');
  }

}

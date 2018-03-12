import { Pipe, PipeTransform } from '@angular/core';
import {URL_IMAGEN} from '../../config/url.servicios';
@Pipe({
  name: 'imagen',
})
export class ImagenPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(codigo: string) {
    return "http://localhost/restigniter/rest/rest/public/img/productos/"+codigo+".jpg"
  }
}

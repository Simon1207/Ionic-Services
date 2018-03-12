import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//Pipes
import {ImagenPipe} from "../pipes/imagen/imagen";


//HTTP MODULO
import { HttpClientModule} from '@angular/common/http';

//SERVICIOS
import { CarritoProvider } from '../providers/carrito/carrito';
import { ProductoProvider } from '../providers/producto/producto';
import { UsuarioProvider } from '../providers/usuario/usuario';

//Paginas
import {CarritoPage,
CategoriasPage,
LoginPage,
OrdenesPage,
OrdenesDetallePage,
PorCategoriasPage,
ProductoPage,
TabsPage }from '../pages/index.paginas';


@NgModule({
  declarations: [
    MyApp,
    ImagenPipe,
    HomePage,
    CarritoPage,
    CategoriasPage,
    LoginPage,
    OrdenesPage,
    OrdenesDetallePage,
    PorCategoriasPage,
    ProductoPage,
    TabsPage
  ],
  imports: [
    BrowserModule,

    HttpClientModule,

    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CarritoPage,
    CategoriasPage,
    LoginPage,
    OrdenesPage,
    OrdenesDetallePage,
    PorCategoriasPage,
    ProductoPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CarritoProvider,
    ProductoProvider,
    UsuarioProvider
  ]
})
export class AppModule {}

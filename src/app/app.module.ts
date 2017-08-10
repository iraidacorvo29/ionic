import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {  SearchPage   }from '../pages/search/search';
import { MisviajesPage } from '../pages/misviajes/misviajes';
import {ListaVuelos} from "../pages/lista-vuelos/lista-vuelos";
import {VueloSeleccionado} from "../pages/vuelo-seleccionado/vuelo-seleccionado";
import {RellenarDatosPage} from "../pages/rellenar-datos/rellenar-datos";
import {PagoPage} from "../pages/pago/pago";
import {LoginPage} from "../pages/login/login";
import {AngularFireModule} from "angularfire2";

export const firebaseConfig = {
  apiKey: "AIzaSyCsm8zTcHkV6wspSMhB8L-_n3JV8MbKnTU",
  authDomain: "agenciaviajes-87f02.firebaseapp.com",
  databaseURL: "https://agenciaviajes-87f02.firebaseio.com",
  projectId: "agenciaviajes-87f02",
  storageBucket: "agenciaviajes-87f02.appspot.com",
  messagingSenderId: "439883203367"
}
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SearchPage,
    MisviajesPage,
    ListaVuelos,
    VueloSeleccionado,
    RellenarDatosPage,
    PagoPage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SearchPage,
    MisviajesPage,
    ListaVuelos,
    VueloSeleccionado,
    RellenarDatosPage,
    PagoPage,
    LoginPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

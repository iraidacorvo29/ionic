import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PagoPage} from "../pago/pago";

/*
  Generated class for the RellenarDatos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-rellenar-datos',
  templateUrl: 'rellenar-datos.html'
})
export class RellenarDatosPage {

  datos={

  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RellenarDatosPage');
  }
  pagar(){
    console.log(this.datos)
    this.navCtrl.push(PagoPage)
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SearchPage} from "../search/search";

/*
  Generated class for the Pago page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pago',
  templateUrl: 'pago.html'
})
export class PagoPage {

  datos={}
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagoPage');
  }
  pagar(){
    this.navCtrl.setRoot(SearchPage)
  }

}

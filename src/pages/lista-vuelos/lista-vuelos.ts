import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {VueloSeleccionado} from "../vuelo-seleccionado/vuelo-seleccionado";
/*
  Generated class for the ListaVuelos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lista-vuelos',
  templateUrl: 'lista-vuelos.html'
})
export class ListaVuelos {
  salida;
  llegada;
  origen;
  destino;
  vuelos : FirebaseListObservable<any>;
  sames: any[] = [];
  private firebase;
  constructor(public navCtrl: NavController, public navParams: NavParams, af:AngularFire) {
    this.firebase = af;
    this.vuelos = this.firebase.database.list('/vuelos',{preserveSnapshot:true});
    this.salida = this.navParams.get('salida');
    this.llegada = this.navParams.get('llegada');
    this.origen = this.navParams.get('origen');
    this.destino = this.navParams.get('destino');
    console.log(this.salida,this.llegada)

    this.vuelos.subscribe(vuelos => {
      var temp: any;
      vuelos.forEach(vuelo => {
        temp = vuelo.val();
        temp.vuelo = vuelo.key;
        vuelo.val().fechaS == this.salida && vuelo.val().fechaL == this.llegada && vuelo.val().origen == this.origen && vuelo.val().destino == this.destino ? this.sames.push(temp) : false;
      })
    })
  }
  vueloSeleccionado(vuelo){
    this.navCtrl.push(VueloSeleccionado,{
      vuelo: vuelo
    });
  }
  ionViewDidLoad() {

  }

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {RellenarDatosPage} from "../rellenar-datos/rellenar-datos";

/*
  Generated class for the VueloSeleccionado page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-vuelo-seleccionado',
  templateUrl: 'vuelo-seleccionado.html'
})
export class VueloSeleccionado {

  vuelos: FirebaseListObservable<any>;
  idVuelo;
  private firebase;
  campos:any[]=[];
  c = {

  }
  constructor(public navCtrl: NavController, public navParams: NavParams,af:AngularFire) {
    this.firebase=af;
    this.idVuelo = this.navParams.get("vuelo")
    this.vuelos = this.firebase.database.list("/vuelos/",{preserveSnapshot:true});
    this.vuelos.subscribe(vuelos => {
      var temp: any;
      vuelos.forEach(vuelo => {
        temp=vuelo.val()
        vuelo.key == this.idVuelo ? this.campos.push(temp): false;
      })
    })
  }
  continuar(){
    this.navCtrl.push(RellenarDatosPage)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad VueloSeleccionadoPage');
  }

}

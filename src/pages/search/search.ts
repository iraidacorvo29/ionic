import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {ListaVuelos} from "../lista-vuelos/lista-vuelos";
import {LoginPage} from "../login/login";

/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  vuelos: FirebaseListObservable<any>;
  private firebase;
  campos:any[]=[]
  user;

  introducidos = {
    salida : '',
    llegada : '',
    origen:'',
    destino: ''
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, af:AngularFire) {
    this.firebase = af;
    localStorage.getItem("user_uid") != null ? this.user =  localStorage.getItem("user_uid") : false
    this.vuelos = this.firebase.database.list("/vuelos",{preserveSnapshot:true});
    this.introducidos.salida = new Date().toISOString().slice(0,10);
    this.introducidos.llegada = new Date().toISOString().slice(0,10);
    this.vuelos.subscribe(vuelos =>{
      var temp: any;
      vuelos.forEach(vuelo =>{
        temp = vuelo.val();
        this.campos.push(temp);
      })
    })

  }
  buscar(){
    this.navCtrl.push(ListaVuelos,this.introducidos);
  }
  logIn(){
    this.navCtrl.push(LoginPage)
  }

}

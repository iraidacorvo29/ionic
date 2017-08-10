import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public nav: NavController) {

  }
  goHome(){
    //this.nav.push(MyTeamsPage);
    this.nav.popToRoot();
  }
}



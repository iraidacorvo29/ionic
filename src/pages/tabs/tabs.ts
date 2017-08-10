import { Component, ViewChild } from '@angular/core';
import {Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import {  SearchPage   }from '../search/search';
import{ MisviajesPage } from '../misviajes/misviajes'
import {FirebaseListObservable, AngularFire} from "angularfire2";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  @ViewChild(Nav) nav: Nav;
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;
  tab4Root: any = SearchPage;
  tab5Root: any=  MisviajesPage;
  pages: Array<{title: string, component: any}>;




  constructor() {


  }


}

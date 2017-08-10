import { Component } from '@angular/core';
import {NavController, NavParams, MenuController, ToastController} from 'ionic-angular';
import {FirebaseObjectObservable, AngularFire} from "angularfire2";
import {SearchPage} from "../search/search";

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  saludo: string;
  tipo: FirebaseObjectObservable<any>;

  constructor(public navCtrl: NavController,navParams: NavParams, private firebase: AngularFire, public menu: MenuController, public toast: ToastController) {
    this.saludo = 'Login'
    //this.menu.enable(false);
  }

  submitForm(form: any) {
    this.firebase.auth.login(
      {
        email: form.value.email,
        password: form.value.password
      }).then(
      (success) => {
        this.tipo = this.firebase.database.object('/usuarios/' + success.uid + '/tipo', {preserveSnapshot: true});
        localStorage.setItem("user_uid", success.uid);
        this.navCtrl.push(SearchPage)
      }
    ).catch(
      (error) => {
        switch (error.message) {
          case "There is no user record corresponding to this identifier. The user may have been deleted.":
            // Cambiar por toast
            this.writeToast('Este correo no se corresponde con ningún usuario');
            break;
          case "The password is invalid or the user does not have a password.":
            // Cambiar por toast
            this.writeToast('La contraseña no coincide');
            break;
        }
      }
    );
  }

  writeToast(message) {
    let toast = this.toast.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

}

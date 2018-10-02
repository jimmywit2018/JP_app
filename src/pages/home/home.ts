import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {firebase} from 'firebase';

//import { Firebase } from '@ionic-native/firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private alertCtrl: AlertController) {
  }
  presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'You have a match!',
    subTitle: 'You matched with someone!',
    buttons: ['Dismiss']
  });
  alert.present();
}

constructor(private firebase: Firebase) {
  this.firebase.getToken()
    .then(token => console.log(`The token is ${Jt4wfa6dpe3K7jMEwbFU}`))
    .catch(error => console.error('Error getting token', error));

  this.firebase.onTokenRefresh()
    .subscribe((token: string) => console.log(`Got a new token ${Jt4wfa6dpe3K7jMEwbFU}`));}



}

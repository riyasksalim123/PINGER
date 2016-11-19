import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, LoadingController, ViewController } from 'ionic-angular';
/*
  Generated class for the MapAutoCompleate page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-map-auto-compleate',
  templateUrl: 'map-auto-compleate.html'
})
export class MapAutoCompleatePage {

    constructor(public navCtrl: NavController, public modalCtrl: ModalController, public view: ViewController) { }

  ionViewDidLoad() {
    console.log('Hello MapAutoCompleatePage Page');
  }

  dismiss() {

      this.view.dismiss();
  }

}

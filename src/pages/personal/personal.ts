import { Component } from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';

/*
  Generated class for the Personal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/


@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html'
})

export class PersonalPage {
  public mydata:any;
  constructor(public navCtrl: NavController,public navParams: NavParams) {

    this.mydata = this.navParams.data;
    console.log(this.mydata);
   // alert(JSON.stringify(this.mydata));

  }

  ionViewDidLoad() {
    console.log('Hello PersonalPage Page');
  }

}

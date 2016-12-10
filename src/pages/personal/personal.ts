import { Component } from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';




@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html'
})

export class PersonalPage {
  public mydata:any;
  constructor(public navCtrl: NavController,public navParams: NavParams) {

    this.mydata = this.navParams.data;
    console.log(this.mydata);
  

  }

  ionViewDidLoad() {
    console.log('Hello PersonalPage Page');
  }

}

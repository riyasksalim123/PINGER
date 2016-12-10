import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {  NavParams} from 'ionic-angular';
import { ToastController } from 'ionic-angular';
// import { HelperServices } from '../../providers/helper';
import { ButtonchoosePage } from '../buttonchoose/buttonchoose';
/*
  Generated class for the ProfilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile-page',
  templateUrl: 'profile-page.html'
})
export class ProfilePagePage {
public mydata:any;
  constructor(public navCtrl: NavController,public navParams: NavParams,public toastCtrl: ToastController) {

      this.mydata=this.navParams.data;
       let toast = this.toastCtrl.create({
      message: 'Hello '+this.mydata.name,
      duration: 10000,
      position:'top'
    });
    toast.present();

  }

  ionViewDidLoad() {
    console.log(this.mydata);
  }
   continue(){
     
      
        this.navCtrl.push(ButtonchoosePage,this.mydata);

  
  }

}

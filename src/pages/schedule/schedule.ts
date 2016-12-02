import { Component, ViewChild } from '@angular/core';
import { ModalController, LoadingController, ViewController, NavParams, ToastController } from 'ionic-angular';
import { AlertController, App, ItemSliding, List, NavController } from 'ionic-angular';
import { SpeakerListPage } from '../speaker-list/speaker-list';
/*
  To learn how to use third party libs in an
  Ionic app check out our docs here: http://ionicframework.com/docs/v2/resources/third-party-libs/
*/
import moment from 'moment';

import { ConferenceData } from '../../providers/conference-data';
import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
import { SessionDetailPage } from '../session-detail/session-detail';
import { UserData } from '../../providers/user-data';


@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage {

  @ViewChild('scheduleList', {read: List}) scheduleList: List;

  dayIndex = 0;
  queryText = '';
  segment = 'all';
  excludeTracks = [];
  shownSessions: any = [];
  groups = [];
  confDate: string;
  public params: any;
   public samplearray:any;
  constructor(
    public alertCtrl: AlertController,
    public app: App,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public confData: ConferenceData,
    public user: UserData,

   
    public navParams: NavParams
   
  ) {
      this.params = this.navParams.data;
      console.log(this.params);
    //  alert(JSON.stringify(this.params));
  }

  ionViewDidEnter() {
    this.app.setTitle('poi');

this.samplearray=[
{
      "menu1":{
            "name":"Pan Pacific Park Recreation Center",
            "age":20

      }
,

      "menu2":{
           "name":"Griffith Park",
            "age":200
      }
}

]

    console.log(this.samplearray);
console.log(this.samplearray)
    
}



  goToSessionDetail(sessionData) {
    // go to the session detail page
    // and pass in the session data
    this.navCtrl.push(SessionDetailPage, sessionData);
  }

  // addFavorite(slidingItem: ItemSliding, sessionData) {

  //   if (this.user.hasFavorite(sessionData.name)) {
  //     // woops, they already favorited it! What shall we do!?
  //     // prompt them to remove it
  //     this.removeFavorite(slidingItem, sessionData, 'Favorite already added');
  //   } else {
  //     // remember this session as a user favorite
  //     this.user.addFavorite(sessionData.name);

  //     // create an alert instance
  //     let alert = this.alertCtrl.create({
  //       title: 'Favorite Added',
  //       buttons: [{
  //         text: 'OK',
  //         handler: () => {
  //           // close the sliding item
  //           slidingItem.close();
  //         }
  //       }]
  //     });
  //     // now present the alert on top of all other content
  //     alert.present();
  //   }

  // }

  // removeFavorite(slidingItem: ItemSliding, sessionData, title) {
  //   let alert = this.alertCtrl.create({
  //     title: title,
  //     message: 'Would you like to remove this session from your favorites?',
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         handler: () => {
  //           // they clicked the cancel button, do not remove the session
  //           // close the sliding item and hide the option buttons
  //           slidingItem.close();
  //         }
  //       },
  //       {
  //         text: 'Remove',
  //         handler: () => {
  //           // they want to remove this session from their favorites
  //           this.user.removeFavorite(sessionData.name);
  //           this.updateSchedule();

  //           // close the sliding item and hide the option buttons
  //           slidingItem.close();
  //         }
  //       }
  //     ]
  //   });
  //   // now present the alert on top of all other content
  //   alert.present();
  // }

  public gotosync() {

      this.navCtrl.push(SpeakerListPage);

  }

 
}

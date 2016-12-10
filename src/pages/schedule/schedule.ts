import { Component, ViewChild } from '@angular/core';
import { ModalController, LoadingController, ViewController, NavParams, ToastController } from 'ionic-angular';
import { AlertController, App, ItemSliding, List, NavController } from 'ionic-angular';
import { SpeakerListPage } from '../speaker-list/speaker-list';
/*
  To learn how to use third party libs in an
  Ionic app check out our docs here: http://ionicframework.com/docs/v2/resources/third-party-libs/
*/
//import moment from 'moment';

// import { ConferenceData } from '../../providers/conference-data';
// import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
import { SessionDetailPage } from '../session-detail/session-detail';
import { HelperServices } from '../../providers/helper';
// import { UserData } from '../../providers/user-data';


@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
  providers:[HelperServices]
})
export class SchedulePage {

  @ViewChild('scheduleList', { read: List }) scheduleList: List;

  public params: any;

  public queryText:any="";
  constructor(
  
    public helper: HelperServices,
  
  
    public navParams: NavParams

  ) {
    this.params = this.navParams.data;

  }

  // ionViewDidEnter() {
  //   this.app.setTitle('poi');


  // }



  goToSessionDetail(sessionData) {
this.helper.goToOtherPage(SessionDetailPage,sessionData);
    // this.navCtrl.push(SessionDetailPage, sessionData);
  }



  public gotosync() {
this.helper.goToOtherPage(SpeakerListPage);
    // this.navCtrl.push(SpeakerListPage);

  }
  public updateSchedule(){

  }


}

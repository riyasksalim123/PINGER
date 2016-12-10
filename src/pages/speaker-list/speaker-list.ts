import { Component } from '@angular/core';

import { ActionSheet, ActionSheetController, Config, NavController } from 'ionic-angular';
// import { InAppBrowser } from 'ionic-native';

import { ConferenceData } from '../../providers/conference-data';
import { SessionDetailPage } from '../session-detail/session-detail';
import { SpeakerDetailPage } from '../speaker-detail/speaker-detail';
import { Backendservice } from '../../providers/backendservice';

@Component({
  selector: 'page-speaker-list',
  templateUrl: 'speaker-list.html'
})
export class SpeakerListPage {
  actionSheet: ActionSheet;
  speakers = [];
  public data: any;
  constructor(public actionSheetCtrl: ActionSheetController, public backend: Backendservice, public navCtrl: NavController, public confData: ConferenceData, public config: Config) {
    confData.getSpeakers().then(speakers => {
      this.speakers = speakers;
      });

    this.getfbresults();
  }

  goToSessionDetail(session) {
    this.navCtrl.push(SessionDetailPage, session);
  }

  goToSpeakerDetail(speakerName: string) {
    this.navCtrl.push(SpeakerDetailPage, speakerName);
  }

  goToSpeakerTwitter(speaker) {
    // TODO FIX
    // let app = new InAppBrowser(`https://twitter.com/${speaker.twitter}`, '_blank');
    // app.on('loadstop').subscribe(
    //   (ev) => {
    //     console.log('InAppBrowser loaded!');
    //   });
  }

  openSpeakerShare(speaker) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Share ' + speaker.name,
      buttons: [
        {
          text: 'Copy Link',
          handler: () => {
            // console.log('Copy link clicked on https://twitter.com/' + speaker.twitter);
            // if (window['cordova'] && window['cordova'].plugins.clipboard) {
            //   window['cordova'].plugins.clipboard.copy('https://twitter.com/' + speaker.twitter);
            // }
          }
        },
        {
          text: 'Share via ...',
          handler: () => {
            console.log('Share via clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }

  openContact(speaker) {
    // let mode = this.config.get('mode');

    // let actionSheet = this.actionSheetCtrl.create({
    //   title: 'Contact with ' + speaker.name,
    //   buttons: [
    //     {
    //       text: `Email ( ${speaker.email} )`,
    //       icon: mode !== 'ios' ? 'mail' : null,
    //       handler: () => {
    //         window.open('mailto:' + speaker.email);
    //       }
    //     },
    //     {
    //       text: `Call ( ${speaker.phone} )`,
    //       icon: mode !== 'ios' ? 'call' : null,
    //       handler: () => {
    //         window.open('tel:' + speaker.phone);
    //       }
    //     }
    //   ]
    // });

    // actionSheet.present();
  }

  public getfbresults() {
      let fields = "id,name,gender,location,website,picture,relationship_status,photos";
      let accestocken1 = "EAAZAavAKhfy4BABiLOELPXBeZA4dZCZA3iwXHGPigkAOb9fV3v1agMzQ3qVXXxeJ4zrd4f7rivScsRAdb0Hz63mYHZBc1XYJxaPOZCuQEGz4Tbt1w22eBaodieXckxlRNt9U1FzSMasxs5D4wAADkbdF6nB1P8JVrYfeHOkQsyYQZDZD";
      let accestocke2 = "EAAZAavAKhfy4BAHfaGtiJhJK05J7kFHeZBtAKtoeLeCnR1jSZAQfN2wndUzhJcXnfOZCYpRGIY6HBmaC5h6uzJ7eNOsZC1cGAojc61V7ALtlO28P6Mt0Ws01gHaBTvnvCcEdBZCAvN2b5m5Oe0i7JpS7ZCMUTHCuUPlQAZB1ZAmfOgQZDZD";
      let query = "https://graph.facebook.com/me?access_token=" + accestocke2 + "&fields=" + fields + "";
      this.backend.load(query).then(mapData => {
          this.data = mapData;

          console.log(mapData);
          alert(JSON.stringify(mapData));

      });

  }
}

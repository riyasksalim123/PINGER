import { Component } from '@angular/core';

import { MenuController, NavController } from 'ionic-angular';



import { MyPagePage } from '../my-page/my-page';
export interface Slide {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;

  constructor(public navCtrl: NavController, public menu: MenuController) {
    this.slides = [
      {
        title: 'Welcome to <b>PERSONALISED TRAVEL SEQUENCE</b>',
        description: 'The <b>PERSONALISED TRAVEL SEQUENCE</b> is a automatic travel recomentation personalised to user interest.',
        //image: 'assets/img/ica-slidebox-img-1.png',
        image: 'assets/img/maxresdefault.jpg',
      },
      {
        title: 'What is Data Mining?',
        description: '<b>Data Mining </b> is a practice of examining large preexcisting databases in order to generate new informations',
        image: 'http://i63.tinypic.com/2vdl0yw.jpg',

      },
      {
        title: 'What is Point of Interests?',
        description: 'The <b>POI</b>is a specific point location that some one may find useful or interesing',
        image: 'http://allthingsnav.navigation.com/sites/default/files/field/image/WaysToSearch.jpg',
      }
    ];
  }

  startApp() {
    this.navCtrl.push(MyPagePage);
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd;
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(false);
  }

}

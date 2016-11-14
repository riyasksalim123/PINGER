
import { ModalController, LoadingController } from 'ionic-angular';
import { MapPage } from '../map/map';
import { TutorialPage } from '../tutorial/tutorial';
import { Geolocation} from 'ionic-native';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Backendservice } from '../../providers/backendservice';


@Component({
    selector: 'page-my-page',
    templateUrl: 'my-page.html'
})

export class MyPagePage {
    data: any;
    constructor(public navCtrl: NavController,
        private toastCtrl: ToastController,
        public backend: Backendservice,
        public modalCtrl: ModalController,
        public loadingCtrl: LoadingController)

    {
       
    }

    ionViewDidLoad() {
     
      //this.backend.load('../assets/data/data.json').then(mapData => {
      //    this.data = mapData;

      //});

      this.backend.loadclarifyservice('https://upload.wikimedia.org/wikipedia/en/c/c0/Wayanad_Urban_Bus.jpg').then(mapdata => {
          alert(JSON.stringify(mapdata))
      });

    }
    public showSnackbar(message?: string) {
    
      const toast = this.toastCtrl.create({
          message: message,
          showCloseButton: true,
          closeButtonText: 'Ok'
      });
      toast.present();
    
      
  }
    public speak()
  {

    
    }
    public redirecttomap() {
        let modal = this.modalCtrl.create(MapPage);
        modal.present();
       
    }
    public presentLoading() {
        let loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
    }
    public goToOtherPage() {
        this.navCtrl.push(TutorialPage);
    }
}

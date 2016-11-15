
import { ModalController, LoadingController } from 'ionic-angular';
import { MapPage } from '../map/map';
import { TutorialPage } from '../tutorial/tutorial';
import { Geolocation, TextToSpeech } from 'ionic-native';
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
        public loadingCtrl: LoadingController) {
        this.loadCurrentLocation();
        this.toast("hi i am a toast");
    }

    ionViewDidLoad() {

        //this.backend.load('../assets/data/data.json').then(mapData => {
        //    this.data = mapData;

        //});

        this.backend.loadclarifyservice('https://upload.wikimedia.org/wikipedia/en/c/c0/Wayanad_Urban_Bus.jpg').then(mapdata => {
           // alert(JSON.stringify(mapdata))
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
    public redirecttomap() {
        let modal = this.modalCtrl.create(MapPage);
        modal.present();
    }
    public presentLoading() {

        
            let toast = this.toastCtrl.create({
                message: 'User was added successfully',
                duration: 3000
            });
            toast.present();
       

        //let loader = this.loadingCtrl.create({
        //    content: "Please wait...",
        //    duration: 3000
        //});
        //loader.present();
    }
    public goToOtherPage() {
        this.navCtrl.push(TutorialPage);
    }
    public loadCurrentLocation() {

        Geolocation.getCurrentPosition().then(pos => {

            let url = "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + pos.coords.latitude + "," + pos.coords.longitude + "&sensor=true'";
            this.backend.load(url).then(data => {
                this.speak("your current location is " + data.results[0].formatted_address + " .");
                this.toast("your current location is " + data.results[0].formatted_address + " .");
            });
        });

        let watch = Geolocation.watchPosition().subscribe(pos => {
            console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
            // alert('latwat: ' + pos.coords.latitude + ', lonwat: ' + pos.coords.longitude);
            //let url = "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + pos.coords.latitude + "," + pos.coords.longitude + "&sensor=true'";
            //this.backend.load(url).then(data => {
            //    this.speak("your current location is " + data.results[0].formatted_address + " .");
            //});


        });

    }
    public speak(text: string) {
        TextToSpeech.speak(text)
            .then(() => console.log('Success'))
            .catch((reason: any) => console.log(reason));
    }
    public toast(text: string) {
        let toast = this.toastCtrl.create({
            message: text,
            duration: 10000,
            position: 'top'
        });
        toast.present();
    }
}

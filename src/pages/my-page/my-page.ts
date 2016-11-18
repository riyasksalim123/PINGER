
import { ModalController, LoadingController } from 'ionic-angular';
import { MapPage } from '../map/map';
import { TutorialPage } from '../tutorial/tutorial';
import { Geolocation, TextToSpeech } from 'ionic-native';
import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Backendservice } from '../../providers/backendservice';
import lodash  from 'lodash';
import {CordovaOauth, Google, Facebook} from 'ng2-cordova-oauth/core';
import { Storage } from '@ionic/storage';

//import mongodb from 'mongodb';

declare var window;

declare var FB;
@Component({
    selector: 'page-my-page',
    templateUrl: 'my-page.html'
   
})


export class MyPagePage {
    feed: Array<any>;
    data: any;
    public tocken: any;
    params: any;
    access_token: any;
    sucess: any;

    private cordovaOauth: CordovaOauth = new CordovaOauth();
    private facebookProvider: Facebook = new Facebook({
        clientId: "1788613404753710",
        appScope: ["email", "read_stream", "user_website", "user_location", "user_relationships"]
    })
   

    public facebook;
    constructor(public navCtrl: NavController,
        private toastCtrl: ToastController,
        public backend: Backendservice,
        public modalCtrl: ModalController,
        public loadingCtrl: LoadingController, public platform: Platform, public storage: Storage) {




        
    }

    ionViewDidLoad() {

        //this.backend.load('../assets/data/data.json').then(mapData => {
        //    this.data = mapData;

        //});

        //this.backend.loadclarifyservice('https://upload.wikimedia.org/wikipedia/en/c/c0/Wayanad_Urban_Bus.jpg').then(mapdata => {
        //   // alert(JSON.stringify(mapdata))
        //});

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
    login() {


        this.googlefunction();
        //Facebook.login(['email']).then((res => {

        //    alert(JSON.stringify(res));

        //})).catch((reason: any) => alert(JSON.stringify(reason)));
      

    }

    getloginstatus() {
        let accestocken1 = "EAAZAavAKhfy4BABiLOELPXBeZA4dZCZA3iwXHGPigkAOb9fV3v1agMzQ3qVXXxeJ4zrd4f7rivScsRAdb0Hz63mYHZBc1XYJxaPOZCuQEGz4Tbt1w22eBaodieXckxlRNt9U1FzSMasxs5D4wAADkbdF6nB1P8JVrYfeHOkQsyYQZDZD";
        let accestocke2 = "EAAZAavAKhfy4BAH4ZCmgbZAl7gV74cl4z3xYZBx8Dd56GwXoF9o995FMRX72CQa1QzrZBmB9ADmGtptzLL6xyP95hCFS6QDBEtfBOhUtWOv0V6DFgZALPRZCvyshzVq0FZALFZCaZAE1Cui44ZB81Tk33vM7RYg28grDfeaubWMXZAKXLQZDZD";
        let query = "https://graph.facebook.com/me?access_token=" + accestocke2 +"&fields=id,name,gender,location,website,picture,relationship_status,photos"
        this.backend.load(query).then(mapData => {
            this.data = mapData;

            console.log(mapData);
            alert(JSON.stringify(mapData));

        });

      

        //this.storage.get('tocken').then((name) => {
        //    console.log('tocken: ' + name);
        //    let config = {

        //        params: {
        //            access_token: name, fields: "id,name,gender,location,website,picture,relationship_status", format: "json"

        //        }
        //    }
        //    this.backend.load("https://graph.facebook.com/v2.2/me").then(mapData => {
        //        this.data = mapData;
        //        alert(JSON.stringify(mapData));

        //    });

        //});


     
    
    }

    public googlefunction() {

        this.cordovaOauth = new CordovaOauth();
        this.platform.ready().then(() => {
            this.cordovaOauth.logInVia(this.facebookProvider).then(success => {
             
                this.data = success;
                this.tocken = this.data.access_token;


                this.storage.set('tocken', this.tocken).then(() => {
                    console.log('tocken has been set');
                });

               



           
                alert("RESULT: " + JSON.stringify(success));
            }, error => {
                console.log("ERROR: ", error);
                alert(JSON.stringify(error));
            });
        });
   
    }
}


import { ModalController, ToastController, LoadingController, AlertController, NavController, Platform } from 'ionic-angular';
import { MapPage } from '../map/map';
import { TabsPage } from '../tabs/tabs';
import { MapAutoCompleatePage } from '../map-auto-compleate/map-auto-compleate';
import { TutorialPage } from '../tutorial/tutorial';
import { Geolocation, TextToSpeech } from 'ionic-native';
import { Component} from '@angular/core';
import { Backendservice } from '../../providers/backendservice';
// import lodash  from 'lodash';
import {CordovaOauth, Facebook} from 'ng2-cordova-oauth/core';
import { Storage } from '@ionic/storage';
import { ButtonchoosePage } from '../buttonchoose/buttonchoose';


declare var window;
declare var google: any;
declare var FB;

@Component({
    selector: 'page-my-page',
    templateUrl: 'my-page.html'
})


export class MyPagePage {
    private feed: Array<any>;
    private data: any;
    public tocken: any;
    private params: any;
    private access_token: any;
    private sucess: any;
    public address: Object;
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
        public platform: Platform,
        public storage: Storage,
       )
    {

    }

    ionViewDidLoad() {
        // this.backend.loadclarifyservice('https://scontent.xx.fbcdn.net/t31.0-8/10623590_789178044458631_3709053615946113160_o.jpg').then(mapdata => {
        //     alert(JSON.stringify(mapdata))

        // });


      // let distance = this.backend.latlongdist(40.7486, -73.9864, 40.7486, -73.9864);
      // alert(distance)

     // this.facebookauth();




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
        let modal = this.modalCtrl.create(MapAutoCompleatePage);
        modal.present();
    }
    public getAddress(place: Object) {
        this.address = place['formatted_address'];
     //   var location = place['geometry']['location'];
        // var lat = location.lat();
        // var lng = location.lng();
        // console.log("Address Object", place);
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

        // let watch = Geolocation.watchPosition().subscribe(pos => {
        //     console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
        //     // alert('latwat: ' + pos.coords.latitude + ', lonwat: ' + pos.coords.longitude);
        //     //let url = "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + pos.coords.latitude + "," + pos.coords.longitude + "&sensor=true'";
        //     //this.backend.load(url).then(data => {
        //     //    this.speak("your current location is " + data.results[0].formatted_address + " .");
        //     //});


        // });

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
    public login() {


        this.facebookauth();

    }
    public getfbresults() {
        let fields = "id,name,gender,location,website,picture,relationship_status,photos";
      //  let accestocken1 = "EAAZAavAKhfy4BABiLOELPXBeZA4dZCZA3iwXHGPigkAOb9fV3v1agMzQ3qVXXxeJ4zrd4f7rivScsRAdb0Hz63mYHZBc1XYJxaPOZCuQEGz4Tbt1w22eBaodieXckxlRNt9U1FzSMasxs5D4wAADkbdF6nB1P8JVrYfeHOkQsyYQZDZD";
        let accestocke2 = "EAAZAavAKhfy4BAHfaGtiJhJK05J7kFHeZBtAKtoeLeCnR1jSZAQfN2wndUzhJcXnfOZCYpRGIY6HBmaC5h6uzJ7eNOsZC1cGAojc61V7ALtlO28P6Mt0Ws01gHaBTvnvCcEdBZCAvN2b5m5Oe0i7JpS7ZCMUTHCuUPlQAZB1ZAmfOgQZDZD";
        let query = "https://graph.facebook.com/me?access_token=" + accestocke2 + "&fields=" + fields + "";
        this.backend.load(query).then(mapData => {
            this.data = mapData;

            console.log(mapData);
            alert(JSON.stringify(mapData));

        });

    }
    public opengoogleauto() {

        let modal = this.modalCtrl.create(MapPage);
        modal.present();
    }
    public facebookauth() {

        this.cordovaOauth = new CordovaOauth();
        this.platform.ready().then(() => {
            this.cordovaOauth.logInVia(this.facebookProvider).then(success => {

                this.data = success;
                 alert("RESULT: " + JSON.stringify(success));
                this.tocken = this.data.access_token;
                alert(this.tocken);


                this.storage.set('tocken', this.tocken).then(() => {
                    console.log('tocken has been set');
                });
             alert("storageget"+this.storage.get('tocken'));

            }, error => {
                console.log("ERROR: ", error);
                alert(JSON.stringify(error));
            });
        });

    }
    public redirecttofb() {

        let modal = this.modalCtrl.create(ButtonchoosePage);
        modal.present();

    };
    public signup() {


    }


}



import {Platform } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { Component } from '@angular/core';
import { Backendservice } from '../../providers/backendservice';
import { CordovaOauth, Facebook } from 'ng2-cordova-oauth/core';
import { ButtonchoosePage } from '../buttonchoose/buttonchoose';
import { PersonalPage } from '../personal/personal';
import { WikipediaService } from '../../providers/wikiService';
import { HelperServices } from '../../providers/helper';
import {  NavController } from 'ionic-angular';
import { ProfilePagePage } from '../profile-page/profile-page';
// import {FacebookService, FacebookLoginResponse,FacebookInitParams} from 'ng2-facebook-sdk/dist';


declare var window;
declare var google: any;
declare var FB;

@Component({
    selector: 'page-my-page',
    templateUrl: 'my-page.html',
    providers: [WikipediaService,HelperServices]
})
export class MyPagePage {
    private data: any;
    public tocken: any;
    private cordovaOauth: CordovaOauth = new CordovaOauth();

 
    private facebookProvider: Facebook = new Facebook({
        clientId: "1788613404753710",
        appScope: ["email", "user_website", "user_location", "user_relationships"]
    })
    // public facebook;
    constructor(private helper:HelperServices,
        public backend: Backendservice,
        public platform: Platform,

        public wiki: WikipediaService)
    {
        this.test();
 
    }


    public loadCurrentLocation = () => {
        Geolocation.getCurrentPosition().then(pos => {
            let url = "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + pos.coords.latitude + "," + pos.coords.longitude + "&sensor=true'";
            this.backend.load(url).then(data => {
                this.helper.speak("your current location is " + data.results[0].formatted_address + " .");
                this.helper.showToast("your current location is " + data.results[0].formatted_address + " .");
            });
        });

     

    }
   
    public getfbresults(tocken: any) {
        let fields = "id,name,gender,location,website,picture,relationship_status,photos,inspirational_people,favorite_teams,test_group,movies,likes,tagged_places,hometown";
        let accestocke2 = tocken;
        console.log("get tocken" + tocken);
        let query = "https://graph.facebook.com/me?access_token=" + accestocke2 + "&fields=" + fields + "";
        this.backend.load(query).then(mapData => {
            this.data = mapData;
            console.log(mapData);
        });

    }

    public facebookauth() {
        this.cordovaOauth = new CordovaOauth();
        this.platform.ready().then(() => {
            this.cordovaOauth.logInVia(this.facebookProvider).then(success => {
                this.data = success;
                console.log("RESULT: " + JSON.stringify(success));
                this.tocken = this.data.access_token;
                console.log(this.tocken);
                this.getfbresults(this.tocken);

            }, error => {
                console.log("ERROR: ", error);
                console.log(JSON.stringify(error));
            });
        });

    }
    public redirecttofb() {
  
         this.helper.goToOtherPage(ButtonchoosePage,"");
    };
    public test() {
        let mockdata = this.backend.mockfb();

        this.helper.goToOtherPage(PersonalPage,mockdata);

    }
    public signup(){


    }
}


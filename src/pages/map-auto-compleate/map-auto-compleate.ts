import { Component,ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, LoadingController, ViewController, NavParams, ToastController } from 'ionic-angular';
import { OnInit, ViewChild } from '@angular/core';
import { FormControl } from "@angular/forms";
import { MapsAPILoader } from 'angular2-google-maps/core';
import { Http } from '@angular/http';
import { TextToSpeech } from 'ionic-native';
import { SpeakerListPage } from '../speaker-list/speaker-list';
import { Backendservice } from '../../providers/backendservice';
import { SchedulePage } from '../schedule/schedule';
declare var google: any;
/*
  Generated class for the MapAutoCompleate page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
//@Component({
//  selector: 'page-map-auto-compleate',
//  templateUrl: 'map-auto-compleate.html'
//})

//@Component({
//    selector: 'my-app',
//    styles: [`
//    .sebm-google-map-container {
//      height: 300px;
//    }
//  `],
//    template: `
//    <div class="container">
//      <h1>Angular 2 + Google Maps Places Autocomplete</h1>
//      <div class="form-group">
//        <input placeholder="search for location" autocorrect="off" autocapitalize="off" spellcheck="off" type="text" class="form-control" #search [formControl]="searchControl">
//      </div>
//      <sebm-google-map [latitude]="latitude" [longitude]="longitude" [scrollwheel]="false" [zoom]="zoom">
//        <sebm-google-map-marker [latitude]="latitude" [longitude]="longitude"></sebm-google-map-marker>
//      </sebm-google-map>
//    </div>
//  `
//})
@Component({
    selector: 'map-auto',
    templateUrl: "map-auto-compleate.html"
})
export class MapAutoCompleatePage implements OnInit {

    public latitude: number;
    public longitude: number;
    public searchControl: FormControl;
    public zoom: number;
    public decition: string;
    public title: string;
    public res: any
    public poibutton: boolean = false;

    public array=[];
    @ViewChild("search")
    public searchElementRef: ElementRef;
    public PoiData: any


    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public backend: Backendservice,
        public modalCtrl: ModalController,
        public view: ViewController,
        private mapsAPILoader: MapsAPILoader,
        private toastCtrl: ToastController, public http: Http ) {

        this.decition = this.navParams.data;

        if (this.decition == "current") {
            this.title = "Your current location";


        }
        else {
            this.title = "Please select the manual location";
        }
        //alert(this.decition);
    }

  ionViewDidLoad() {
    console.log('Hello MapAutoCompleatePage Page');
  }

  dismiss() {

      this.view.dismiss();
  }


   

  ngOnInit() {
      //set google maps defaults
      this.zoom = 4;
      this.latitude = 39.8282;
      this.longitude = -98.5795;

      //create search FormControl
      this.searchControl = new FormControl();

      //set current position

      if (this.decition == "current") {

          this.setCurrentPosition();
      }
      else {
          //load Places Autocomplete
          this.mapsAPILoader.load().then(() => {
              let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
                  types: ["address"]
              });
              autocomplete.addListener("place_changed", () => {
                  //get the place result
                  // let place=  google.maps.places.PlaceResult = autocomplete.getPlace();

                  //set latitude and longitude
                  this.latitude = autocomplete.getPlace().geometry.location.lat();
                  this.longitude = autocomplete.getPlace().geometry.location.lng();

                  this.locationset(this.latitude, this.longitude);
                  //alert(this.latitude)
              });
          });

      }
    

    
  }

  private setCurrentPosition() {
      if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition((position) => {
              this.latitude = position.coords.latitude;
              this.longitude = position.coords.longitude;
              this.zoom = 12;
              this.locationset(this.latitude,this.longitude);
          });
      }
  }
  public locationset(lat: any, long: any) {
    
      let url = "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + long + "&sensor=true'";
      this.backend.load(url).then(data => {
          this.speak("you selected " + data.results[0].address_components[2].long_name + " .");
          this.toast("you selected " + data.results[0].formatted_address + " .");
          //let addr = data.results[0].address_components[2].long_name;
          console.log(data.results[0].address_components[2].long_name);
          //neeed to do latrer
         // this.description(addr);
          
          this.getinterest(lat, long);

      });

  }
  public description(item: string) {
      //http://api.geonames.org/wikipediaSearchJSON?formatted=true&q=palakkad&maxRows=10&username=demo&style=full

      let url = "https://en.wikipedia.org/w/api.php?action=query&prop=description&titles=kaloor&prop=extracts&exintro&explaintext&exsentences=3&format=json&redirects&callback=?";
      this.backend.load(url).then(data => {
         
          console.log(data);
      });

  }

  //COUNTRY clientInformation
  //http://api.geonames.org/countryInfoJSON?formatted=true&lang=it&country=IN&username=demo&style=full

  public getinterest(lat: any, lon: any, radius?: any) {

      //  alert("getinterest");
      this.poibutton = true;
      if (radius == null) {
          radius = 10000;
      }

        //let interests: any = ["park", "museum", "amusement_park", "art_gallery", "aquarium", "atm", "beauty_salon", "book_store", "movie_theater", "casino", "bowling_alley", "bus_station", "cafe", "city_hall", "restaurant", "shopping_mall", "spa", "stadium", "zoo", "hair_care", "gym", "grocery_or_supermarket", "home_goods_store"];
      let interests: any = ["park", "museum", "amusement_park"];
  
        //for (var z = 0; interests.length < 0; z++) {
      for (var z = 0; z < interests.length; z++) { 
         
            let currentinteres = interests[z];
          // let url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + lon + "&radius=" + radius + "&type=" + currentinteres + "&key=AIzaSyBmbRGUuc0yB4vKbxsW8BUr4hZ546opppM";
            let url = "https://api.myjson.com/bins/ysp6";
            //this.backend.load(url).then(result => {
            this.http.get(url).subscribe(res => {
                this.res = res;
                this.res = JSON.parse(this.res._body);
                let resultlength = this.res.results.length;

                if (resultlength > 0) {
                    for (var i = 0; i < resultlength; i++) { 

                        let name = this.res.results[i].name;
                        console.log(this.res.results[i]);
                        this.PoiData = this.res.results[i];
                        this.array.push(this.PoiData);
                        this.array[i]["interest"] = currentinteres;

                        //alert(currentinteres+" category  :"+name);

                    }
                }

            });
      }

            //});

        //}

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
  public showpoi() {

      this.navCtrl.push(SchedulePage, this.array);
  }
}

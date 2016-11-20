import { Component,ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, LoadingController, ViewController } from 'ionic-angular';
import { OnInit, ViewChild } from '@angular/core';
import { FormControl } from "@angular/forms";
import { MapsAPILoader } from 'angular2-google-maps/core';
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
    selector: 'my-app',
    templateUrl:'map-auto-compleate.html'
})
export class MapAutoCompleatePage implements OnInit {

    public latitude: number;
    public longitude: number;
    public searchControl: FormControl;
    public zoom: number;

    @ViewChild("search")
    public searchElementRef: ElementRef;



    constructor(public navCtrl: NavController, public modalCtrl: ModalController, public view: ViewController, private mapsAPILoader: MapsAPILoader) { }

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
      this.setCurrentPosition();

      //load Places Autocomplete
      this.mapsAPILoader.load().then(() => {
          let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
              types: ["address"]
          });
          autocomplete.addListener("place_changed", () => {
              //get the place result
              let place:  google.maps.places.PlaceResult = autocomplete.getPlace();

              //set latitude and longitude
              this.latitude = place.geometry.location.lat();
              this.longitude = place.geometry.location.lng();

              alert(this.latitude)
          });
      });
  }

  private setCurrentPosition() {
      if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition((position) => {
              this.latitude = position.coords.latitude;
              this.longitude = position.coords.longitude;
              this.zoom = 12;
          });
      }
  }

}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

//  Generated class for the Backendservice provider.

//  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
//  for more info on providers and Angular 2 DI.
//*/

declare var Clarifai;
declare var Headers;
@Injectable()

export class Backendservice {
    data: any;
    clarify_obj: any;
    page: any;
    constructor(public http: Http)
    {
        console.log('Hello Backendservice Provider');
        // this.loadclarify();
     

    }

    load(url: string, config?: any) {
        this.data = null;
      if (this.data) {
          // already loaded data
          return Promise.resolve(this.data);
      }

      // don't have the data yet
      return new Promise(resolve => {
          // We're using Angular Http provider to request the data,
          // then on the response it'll map the JSON data to a parsed JS object.
          // Next we process the data and resolve the promise with the new data.

          let headers = new Headers(); 
          headers.append('Accept', 'application/json');
          headers.append('Content-Type', 'application/json');
          headers.append('Access-Control-Allow-Origin', '*');
          headers.append('Access-Control-Allow-Credentials', 'true');
          headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
          headers.append("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token");

          this.http.get(url, headers).subscribe(res => {
              // we've got back the raw data, now generate the core schedule data
              // and save the data for later reference
              this.data = res.json();
              resolve(this.data);
          });
      });
    }
    loaddup(url: string) {


    }
    loadclarify()
    {

        this.clarify_obj = new Clarifai.App(
            'O2mU4uwnnYodMXPC5S2-fxxGuX6n48xXdGNF9BHv',
            'KBKeWdNVWD0IS3ELFqjZUo_26sRLsBeeXPGnzeoW'
        );

    }  

    loadclarifyservice(imageurl: string) {

        if (this.data) {
          
            return Promise.resolve(this.data);
        }

        return new Promise(resolve => {
           
            this.clarify_obj.models.predict(Clarifai.GENERAL_MODEL, imageurl).then(res => {
               
                this.data = res.data;
                resolve(this.data);
            });
        });
    }


    public loadpopup() {
        alert("dfgbvfd");
        //let alert = this.alertsController.create({
        //    title: 'Destroy World',
        //    message: 'Are you sure?',
        //    buttons: [{
        //        text: 'Cancel',
        //        role: 'cancel',
        //        handler: () => {
        //            console.log('CANCEL');
        //        }
        //    }, {
        //            text: 'OK',
        //            handler: () => {
        //                console.log('OK');
        //                this.page.redirecttomap();
        //                //let nestedAlert = this.alertsController.create({
        //                //    title: 'Destroy World',
        //                //    message: 'Now destroying world. Please stand by.',
        //                //    buttons: ['OK']
        //                //});
        //                //nestedAlert.present();
        //                return false;
        //            }
        //        }]
        //});
        //alert.present();

    }

     public latlongdist(lat1: any, lon1: any, lat2: any, lon2: any) {

        //(Haversine formula)
        var p = 0.017453292519943295;    // Math.PI / 180
        var c = Math.cos;
        var a = 0.5 - c((lat2 - lat1) * p) / 2 +
            c(lat1 * p) * c(lat2 * p) *
            (1 - c((lon2 - lon1) * p)) / 2;
        let ret = 12742 * Math.asin(Math.sqrt(a));
        alert(ret);
        return ret // 2 * R; R = 6371 km

      
    }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Backendservice provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

declare var Clarifai;
@Injectable()

export class Backendservice {
    data: any;
    clarify_obj: any;
    constructor(public http: Http)
    {
        console.log('Hello Backendservice Provider');
        this.loadclarify();
    }

    load(url: string,config?:any) {
      if (this.data) {
          // already loaded data
          return Promise.resolve(this.data);
      }

      // don't have the data yet
      return new Promise(resolve => {
          // We're using Angular Http provider to request the data,
          // then on the response it'll map the JSON data to a parsed JS object.
          // Next we process the data and resolve the promise with the new data.
          this.http.get(url,config).subscribe(res => {
              // we've got back the raw data, now generate the core schedule data
              // and save the data for later reference
              this.data = res.json();
              resolve(this.data);
          });
      });
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
}

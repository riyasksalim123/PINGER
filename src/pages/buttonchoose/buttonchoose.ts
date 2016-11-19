import { Component, ElementRef, ViewChild} from '@angular/core';

import { PopoverController } from 'ionic-angular';

import { PopoverPage } from '../about-popover/about-popover';
declare var google: any;
declare var Autocomplete: any;

@Component({
  selector: 'page-buttonchoose',
  templateUrl: 'buttonchoose.html'
})
export class ButtonchoosePage {
    public data: any;
    public selectedItem: string = "kaloor";
    conferenceDate = '2047-05-17';

    fromValue: string;

    toValue: string;
    public islocationchoosen: boolean;
    constructor(public popoverCtrl: PopoverController) {
        this.islocationchoosen = true;
        this.fromValue = "";
        this.toValue = "";
    }

    presentPopover(event) {
        let popover = this.popoverCtrl.create(PopoverPage);
        popover.present({ ev: event });
    }

    public test() {
        alert("ehef")

    }
    public location(location: string) {
        this.islocationchoosen = false;

       // this.initialize();
        if (location == "manual") {
            alert(location);
           

        }
        else
        {
            alert(location);
        }

    }

    ngAfterViewInit() {
        // get the two fields
        let input_from = (<HTMLInputElement>document.getElementById("journey_from"));
        let input_to = (<HTMLInputElement>document.getElementById("journey_to"));

        // set the options
        let options = {
            types: [],
            componentRestrictions: { country: "uk" }
        };

        // create the two autocompletes on the from and to fields
        let autocomplete1 = new google.maps.places.Autocomplete(input_from, options);
        let autocomplete2 = new google.maps.places.Autocomplete(input_to, options);

        // we need to save a reference to this as we lose it in the callbacks
        let self = this;

        // add the first listener
        google.maps.event.addListener(autocomplete1, 'place_changed', function () {

            let place = autocomplete1.getPlace();
            let geometry = place.geometry;
            if ((geometry) !== undefined) {

                console.log(place.name);

                console.log(geometry.location.lng());

                console.log(geometry.location.lat());
            }
        });

    }
}

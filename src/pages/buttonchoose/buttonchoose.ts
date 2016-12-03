import {Component} from '@angular/core';
import {PopoverController, NavController, ViewController} from 'ionic-angular';
import {PopoverPage} from '../about-popover/about-popover';
import {MapAutoCompleatePage} from '../map-auto-compleate/map-auto-compleate';
@Component({
  selector: 'page-buttonchoose',
  templateUrl: 'buttonchoose.html'
})
export class ButtonchoosePage {
  public data: any;
  public islocationchoosen: boolean;

  constructor(public popoverCtrl: PopoverController,
              public navCtrl: NavController,
              public view: ViewController) {
    this.islocationchoosen = true;

  }

  public presentPopover(event) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({ev: event});
  }
  public location(location: string) {
    this.goToautomapDetail(location);
  }
  public goToautomapDetail(decition: string) {
    this.navCtrl.push(MapAutoCompleatePage, decition);
  }
  public dismiss() {
    this.view.dismiss();
  }

}

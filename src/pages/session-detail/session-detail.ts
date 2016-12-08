import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';
import { Backendservice } from '../../providers/backendservice';

@Component({
  selector: 'page-session-detail',
  templateUrl: 'session-detail.html'
})
export class SessionDetailPage {
  session: any;
  public results:any;

  constructor(public navParams: NavParams, public backend: Backendservice) {
      this.session = navParams.data;
      alert(this.session);
      this.flickr("coimbatore");
  }

public flickr(name){
              let url = "http://api.flickr.com/services/feeds/photos_public.gne?tags="+ name+"&format=json&jsoncallback=?";
            this.backend.load(url).then(data => {
                this.results=data;
                console.log(this.results.items);
            });
}
    
}

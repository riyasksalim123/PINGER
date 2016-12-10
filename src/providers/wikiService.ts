import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Observable }       from 'rxjs/Observable';
import { Http } from '@angular/http';
@Injectable()
export class WikipediaService {
  constructor(private jsonp: Jsonp,public http: Http) {}


//  search (term: string) {
//     let wikiUrl = 'http://en.wikipedia.org/w/api.php';
//     let params = new URLSearchParams();
//     params.set('search', term); // the user's search value
//     params.set('action', 'opensearch');
//     params.set('format', 'json');
//     params.set('callback', 'JSONP_CALLBACK');
//     // TODO: Add error handling
//     return this.jsonp
//                .get(wikiUrl, { search: params })
//                .map(response => <string[]> response.json()[1]);
//   }




//  public search (term: string) {
//     let wikiUrl = 'http://en.wikipedia.org/w/api.php';
//     let params = new URLSearchParams();
//     params.set('search', term); // the user's search value
//    // params.set('action', 'opensearch');
//     params.set('format', 'GET');
//     //params.set('callback', 'JSONP_CALLBACK');
//     // TODO: Add error handling
//     return this.http
//                .get(wikiUrl, { search: params })
//                .map(response => alert(response.json()));
//   }


  public search = (term: string) => {
      return new Promise(resolve => {
          let wikiUrl = 'http://en.wikipedia.org/w/api.php';
          let params = new URLSearchParams();
          params.set('search', term); // the user's search value
          this.http.get(wikiUrl, params).subscribe(res => {
              resolve(res.json());
          });
      });
  }
}
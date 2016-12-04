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

  public mockfb(){
    let json={
      "id": "802558306453938",
      "name": "Riyas K Salim",
      "gender": "male",
      "location": {
        "id": "112397265442028",
        "name": "Ernakulam"
      },
      "picture": {
        "data": {
          "is_silhouette": false,
          "url": "https://fb-s-d-a.akamaihd.net/h-ak-xpt1/v/t1.0-1/p50x50/11178251_896956387014129_3853829504925927792_n.jpg?oh=4798f895cdd7e3d1e998bb1fd4ee84a5&oe=58B55AAD&__gda__=1489236467_d3d0eb8de99c119e42807d666ad4c14a"
        }
      },
      "relationship_status": "Single",
      "photos": {
        "data": [
          {
            "created_time": "2014-10-31T07:30:14+0000",
            "id": "616323838478464"
          },
          {
            "created_time": "2015-08-02T11:54:34+0000",
            "name": "We are friends  I got your back You got mine, I'll help you out Anytime! To see you hurt To see you cry  Makes me weep            And if you agree          To never fight            It wouldn't matter          Who's wrong or right          If a broken heart          Needs a mend            I'll be right there         Till the end"

       ,
            "id": "1478275505815925"
  },
    {
      "created_time": "2015-08-02T07:10:16+0000",
      "id": "916845481707676"
    },
    {
      "created_time": "2014-12-29T19:08:34+0000",
      "name": "Bestyzzz foo evaa",
      "id": "371654223007719"
    },

    {
      "created_time": "2014-12-19T16:03:09+0000",
      "name": "enjoying Qatar day wid my Qatari frnd /;::/?..",
      "id": "366426700197138"
    },
    {
      "created_time": "2014-12-08T18:53:31+0000",
      "name": "??(:??",
      "id": "362239217282553"
    },
    {
      "created_time": "2014-12-08T17:57:13+0000",
      "name": "qatar",
      "id": "362226357283839"
    },
    {
      "created_time": "2014-11-14T13:19:35+0000",
      "id": "828883477149825"
    },
    {
      "created_time": "2014-10-21T14:00:02+0000",
      "name": "Dear Mujeeb  wish U happy day",
      "id": "587479978047761"
    },
    {
      "created_time": "2014-10-01T03:14:06+0000",
      "id": "469779373165028"
    },
    {
      "created_time": "2014-10-10T22:18:47+0000",
      "id": "789178067791962"
    },
    {
      "created_time": "2014-10-10T22:18:47+0000",
      "id": "789178044458631"
    },
    {
      "created_time": "2014-10-10T22:18:47+0000",
      "id": "789177961125306"
    },
    {
      "created_time": "2014-10-05T16:33:26+0000",
      "id": "786055008104268"
    },
    {
      "created_time": "2014-06-17T10:10:39+0000",
      "id": "1410688012552613"
    },
    {
      "created_time": "2014-06-16T15:33:07+0000",
      "id": "1410169522604462"
    },
    {
      "created_time": "2014-06-16T15:32:19+0000",
      "id": "1410168945937853"
    },
    {
      "created_time": "2014-06-08T13:07:38+0000",
      "id": "234824293393452"
    },
    {
      "created_time": "2014-02-15T10:14:01+0000",
      "id": "360727777403522"
    },
    {
      "created_time": "2014-02-19T07:57:07+0000",
      "name": "my mom,dad and brother.....",
      "id": "362474750562158"
    },
    {
      "created_time": "2014-03-28T16:54:53+0000",
      "id": "378237078985925"
    },
    {
      "created_time": "2014-04-06T17:55:14+0000",
      "id": "381886341954332"
    },
    {
      "created_time": "2014-05-08T12:11:19+0000",
      "id": "395870500555916"
    },
    {
      "created_time": "2014-05-14T07:53:12+0000",
      "name": "hi hi hi",
      "id": "398470076962625"
    }
  ],
    "paging": {
      "cursors": {
        "before": "TmpFMk16SXpPRE00TkRjNE5EWTBPakUwTlRVeE16azRPVGs2TXprME1EZAzVOalF3TmpRM09ETTIZD",
          "after": "TXprNE5EY3dNRGMyT1RZAeU5qSTFPakUwTURFNE5qVTVPRE02TXprME1EZAzVOalF3TmpRM09ETTIZD"
      },
      "next": "https://graph.facebook.com/v2.8/802558306453938/photos?access_token=EAACEdEose0cBAFN75pBmhv4WNOcZCE95FKuAjSVGN8qqLvCwdKAZAZBbrlGWeUD0oZCZCoUHaLCLdEPpRJr5y8C0ApP6QDdqKPf3WEeZAgf0zcFaEDQDXHzqWoB6Dapo5p6abE22OeEA8iDjfkxvCXxnf8C0LfZBUQtIENfqUQ1KwZDZD&pretty=0&limit=25&after=TXprNE5EY3dNRGMyT1RZAeU5qSTFPakUwTURFNE5qVTVPRE02TXprME1EZAzVOalF3TmpRM09ETTIZD"
    }
  },
    "test_group": 3,
      "movies": {
      "data": [
        {
          "name": "Bollywood Tabloid",
          "id": "635932933162717",
          "created_time": "2016-09-22T21:59:27+0000"
        },
        {
          "name": "Excel Entertainment",
          "id": "717051361723884",
          "created_time": "2015-03-04T20:16:10+0000"
        },
        {
          "name": "Charlie and the Chocolate Factory",
          "id": "339441176067945",
          "created_time": "2014-10-03T03:47:07+0000"
        },
        {
          "name": "127 Hours",
          "id": "145338632166658",
          "created_time": "2014-09-05T08:30:26+0000"
        },
        {
          "name": "Inception",
          "id": "91290503700",
          "created_time": "2014-09-05T08:28:07+0000"
        },
        {
          "name": "Terminator 2 (T2)",
          "id": "152756901432744",
          "created_time": "2014-09-02T13:37:19+0000"
        },
        {
          "name": "Kal Ho Naa Ho",
          "id": "335117769895306",
          "created_time": "2013-01-25T05:46:07+0000"
        },
        {
          "name": "Titanic",
          "id": "216410885045047",
          "created_time": "2012-04-22T15:14:02+0000"
        },
        {
          "name": "The Terminator",
          "id": "181221288646788",
          "created_time": "2012-03-29T21:03:56+0000"
        },
        {
          "name": "Terminator",
          "id": "113331765343914",
          "created_time": "2011-12-03T12:37:12+0000"
        },
        {
          "name": "Kal Ho Na Ho",
          "id": "106545012716615"
        },
        {
          "name": "Cast Away",
          "id": "108057732551493",
          "created_time": "2011-01-13T12:21:34+0000"
        },
        {
          "name": "Dil Chahta Hai",
          "id": "103117456395835",
          "created_time": "2013-08-07T07:57:49+0000"
        }
      ],
        "paging": {
        "cursors": {
          "before": "NjM1OTMyOTMzMTYyNzE3",
            "after": "MTAzMTE3NDU2Mzk1ODM1"
        }
      }
    },
    "likes": {
      "data": [
        {
          "name": "LinkedIn",
          "id": "6191007822",
          "created_time": "2014-10-06T21:24:02+0000"
        },
        {
          "name": "TechBlaze Solutions",
          "id": "808193089235033",
          "created_time": "2016-10-26T09:39:48+0000"
        },
        {
          "name": "IBM Internet of Things",
          "id": "107926682907411",
          "created_time": "2016-10-17T17:05:56+0000"
        },
        {
          "name": "Intel Internet of Things",
          "id": "132530120107861",
          "created_time": "2016-10-17T17:05:55+0000"
        },
        {
          "name": "Bollywood Tabloid",
          "id": "635932933162717",
          "created_time": "2016-09-22T21:59:27+0000"
        },
        {
          "name": "Malayalam Quran - മലയാളം ഖുർആൻ",
          "id": "799244686778999",
          "created_time": "2016-09-10T15:03:48+0000"
        },
        {
          "name": "jQuery404",
          "id": "249138938444795",
          "created_time": "2016-09-03T05:18:41+0000"
        },
        {
          "name": "Dot net Projects",
          "id": "773161552742600",
          "created_time": "2016-09-03T05:18:40+0000"
        },
        {
          "name": "DotNET Developers",
          "id": "184887864888558",
          "created_time": "2016-09-03T05:18:35+0000"
        },
        {
          "name": "Asp.Net Development Company",
          "id": "613274128729177",
          "created_time": "2016-08-31T15:18:58+0000"
        },
        {
          "name": "DotNet developers",
          "id": "363844783640924",
          "created_time": "2016-08-21T14:35:22+0000"
        },
        {
          "name": "Muslim Scientists and Scholars الحكماء المسلمون",
          "id": "922003547879920",
          "created_time": "2016-07-31T15:47:49+0000"
        },
        {
          "name": "Website Development",
          "id": "220435014806260",
          "created_time": "2016-07-23T05:21:14+0000"
        },
        {
          "name": "aspnettutorialonline.blogspot.in",
          "id": "277498362326310",
          "created_time": "2016-07-23T05:21:13+0000"
        },
        {
          "name": "SQL Server DBA-Opensoft Technologies",
          "id": "100856273414361",
          "created_time": "2016-07-23T05:21:10+0000"
        },
        {
          "name": "Zykosoft Technologies LLC",
          "id": "788760837897398",
          "created_time": "2016-07-23T05:20:55+0000"
        },
        {
          "name": "Oracle DBA",
          "id": "140525086030176",
          "created_time": "2016-07-23T05:20:54+0000"
        },
        {
          "name": "DotnetThread",
          "id": "234140033416279",
          "created_time": "2016-07-23T05:20:53+0000"
        },
        {
          "name": "DotnetTips",
          "id": "247922125237097",
          "created_time": "2016-07-23T05:20:52+0000"
        },
        {
          "name": "Phplanguage",
          "id": "187552638042990",
          "created_time": "2016-07-23T05:20:50+0000"
        },
        {
          "name": "Programmers Community",
          "id": "115377481872634",
          "created_time": "2016-07-23T05:20:47+0000"
        },
        {
          "name": "DotNet - Tutorials",
          "id": "1466669060311958",
          "created_time": "2016-07-03T17:08:27+0000"
        },
        {
          "name": "Dot Net Programmer",
          "id": "161544283972228",
          "created_time": "2016-06-18T11:47:14+0000"
        },
        {
          "name": "Web developer Asp.net,Silverlight",
          "id": "203719163021969",
          "created_time": "2016-06-08T17:06:55+0000"
        },
        {
          "name": "Fun with Angular.js",
          "id": "292758097446068",
          "created_time": "2016-06-08T17:06:54+0000"
        }
      ],
        "paging": {
        "cursors": {
          "before": "MTI5NzcxNDU1MDI2MDQ2MAZDZD",
            "after": "MjkyNzU4MDk3NDQ2MDY4"
        },
        "next": "https://graph.facebook.com/v2.8/802558306453938/likes?access_token=EAACEdEose0cBAFN75pBmhv4WNOcZCE95FKuAjSVGN8qqLvCwdKAZAZBbrlGWeUD0oZCZCoUHaLCLdEPpRJr5y8C0ApP6QDdqKPf3WEeZAgf0zcFaEDQDXHzqWoB6Dapo5p6abE22OeEA8iDjfkxvCXxnf8C0LfZBUQtIENfqUQ1KwZDZD&pretty=0&limit=25&after=MjkyNzU4MDk3NDQ2MDY4"
      }
    },
    "tagged_places": {
      "data": [
        {
          "id": "1025279130848520",
          "created_time": "2016-01-25T16:56:36+0000",
          "place": {
            "id": "232794810069787",
            "location": {
              "city": "Kochi",
              "country": "India",
              "latitude": 9.9847874608283,
              "longitude": 76.277629299619,
              "street": "savitha Theatre",
              "zip": "682035"
            },
            "name": "Saritha Theater"
          }
        },
        {
          "id": "905593706150397",
          "created_time": "2015-05-17T12:44:50+0000",
          "place": {
            "id": "130859930336431",
            "location": {
              "city": "Kochi",
              "country": "India",
              "latitude": 9.9817492660533,
              "longitude": 76.282692974306,
              "street": "M. G. Road",
              "zip": "682011"
            },
            "name": "Padma Theatre"
          }
        },
        {
          "id": "905108392865595",
          "created_time": "2015-05-16T14:18:29+0000",
          "place": {
            "id": "522169811168528",
            "location": {
              "city": "Ernakulam",
              "country": "India",
              "latitude": 9.9850022389829,
              "longitude": 76.277749360166,
              "street": "Banerji Road",
              "zip": "682018"
            },
            "name": "Saritha Savitha Sangeetha"
          }
        },
        {
          "id": "905011432875291",
          "created_time": "2015-05-16T09:21:14+0000",
          "place": {
            "id": "120815857992959",
            "location": {
              "city": "Kochi",
              "country": "India",
              "latitude": 9.9794943657728,
              "longitude": 76.276692031603,
              "street": "Shanmugham Road",
              "zip": "682031"
            },
            "name": "Sridhar Cinemas"
          }
        },
        {
          "id": "821145761261859",
          "created_time": "2014-12-13T20:32:26+0000",
          "place": {
            "id": "200644356644257",
            "location": {
              "city": "Doha",
              "country": "Qatar",
              "latitude": 25.317259227913,
              "longitude": 51.53077154002,
              "street": "Corniche - Doha, Qatar",
              "zip": "153"
            },
            "name": "Corniche Park Near Sheraton"
          }
        },
        {
          "id": "820273204682448",
          "created_time": "2014-12-12T00:03:30+0000",
          "place": {
            "id": "337435346316465",
            "location": {
              "city": "Doha",
              "country": "Qatar",
              "latitude": 25.324704851797,
              "located_in": "585963114796930",
              "longitude": 51.529030521926,
              "street": "Cinema in City center",
              "zip": "2500"
            },
            "name": "Cinema City Center Doha"
          }
        },
        {
          "id": "817430331633402",
          "created_time": "2014-12-06T08:12:15+0000",
          "place": {
            "id": "147989668581896",
            "location": {
              "latitude": 25.318141057749,
              "longitude": 51.522554333486
            },
            "name": "West Bay"
          }
        },
        {
          "id": "808961989146903",
          "created_time": "2014-11-18T19:29:39+0000",
          "place": {
            "id": "367504196655936",
            "location": {
              "latitude": 25.372236630385,
              "longitude": 51.541980628495
            },
            "name": "The Pearl Doha, Qatar"
          }
        },
        {
          "id": "799500043426431",
          "created_time": "2014-10-31T10:13:24+0000",
          "place": {
            "id": "369312999803739",
            "location": {
              "city": "Doha",
              "country": "Qatar",
              "latitude": 25.2791348255,
              "longitude": 51.5269279429,
              "street": "Al Mohandiseen Street, Doha, Qatar"
            },
            "name": "Grand Mosque Doha Qatar"
          }
        },
        {
          "id": "795830617126707",
          "created_time": "2014-10-23T18:55:16+0000",
          "place": {
            "id": "302434273222777",
            "location": {
              "latitude": 25.313803,
              "longitude": 51.523395
            },
            "name": "Doha Corniche"
          }
        },
        {
          "id": "789178901125212",
          "created_time": "2014-10-10T22:18:42+0000",
          "place": {
            "id": "393426260722414",
            "location": {
              "city": "Doha",
              "country": "Qatar",
              "latitude": 25.307039891558,
              "longitude": 51.494781687107
            },
            "name": "Souq Waqif, Doha, Qatar"
          }
        },
        {
          "id": "784946598215109",
          "created_time": "2014-10-04T04:13:31+0000",
          "place": {
            "id": "237387026358231",
            "location": {
              "city": "Doha",
              "country": "Qatar",
              "latitude": 25.326353929088,
              "longitude": 51.540374181924
            },
            "name": "Diplomatic Area, West Bay"
          }
        },
        {
          "id": "783975291645573",
          "created_time": "2014-10-02T14:58:19+0000",
          "place": {
            "id": "147989668581896",
            "location": {
              "latitude": 25.318141057749,
              "longitude": 51.522554333486
            },
            "name": "West Bay"
          }
        },
        {
          "id": "782183195158116",
          "created_time": "2014-09-28T11:45:30+0000",
          "place": {
            "id": "585963114796930",
            "location": {
              "city": "Doha",
              "country": "Qatar",
              "latitude": 25.325437574078,
              "longitude": 51.52999393393,
              "zip": "22744"
            },
            "name": "City Center Doha"
          }
        },
        {
          "id": "782182308491538",
          "created_time": "2014-09-28T11:40:06+0000",
          "place": {
            "id": "123021597774796",
            "location": {
              "city": "Doha",
              "country": "Qatar",
              "latitude": 25.339775477713,
              "longitude": 51.504100592727
            },
            "name": "Westbay Area"
          }
        },
        {
          "id": "777473498962419",
          "created_time": "2014-09-17T17:05:28+0000",
          "place": {
            "id": "107514862611377",
            "location": {
              "city": "Kochi",
              "country": "India",
              "latitude": 9.925,
              "longitude": 76.26
            },
            "name": "Kochi, India"
          }
        },
        {
          "id": "775455919164177",
          "created_time": "2014-09-13T06:59:42+0000",
          "place": {
            "id": "107514862611377",
            "location": {
              "city": "Kochi",
              "country": "India",
              "latitude": 9.925,
              "longitude": 76.26
            },
            "name": "Kochi, India"
          }
        },
        {
          "id": "773384009371368",
          "created_time": "2014-09-08T17:21:40+0000",
          "place": {
            "id": "107514862611377",
            "location": {
              "city": "Kochi",
              "country": "India",
              "latitude": 9.925,
              "longitude": 76.26
            },
            "name": "Kochi, India"
          }
        },
        {
          "id": "763790120330757",
          "created_time": "2014-08-19T18:56:01+0000",
          "place": {
            "id": "107514862611377",
            "location": {
              "city": "Kochi",
              "country": "India",
              "latitude": 9.925,
              "longitude": 76.26
            },
            "name": "Kochi, India"
          }
        },
        {
          "id": "762622597114176",
          "created_time": "2014-08-17T04:36:40+0000",
          "place": {
            "id": "107514862611377",
            "location": {
              "city": "Kochi",
              "country": "India",
              "latitude": 9.925,
              "longitude": 76.26
            },
            "name": "Kochi, India"
          }
        },
        {
          "id": "761085477267888",
          "created_time": "2014-08-13T16:34:27+0000",
          "place": {
            "id": "107514862611377",
            "location": {
              "city": "Kochi",
              "country": "India",
              "latitude": 9.925,
              "longitude": 76.26
            },
            "name": "Kochi, India"
          }
        },
        {
          "id": "757217214321381",
          "created_time": "2014-08-05T15:02:23+0000",
          "place": {
            "id": "107514862611377",
            "location": {
              "city": "Kochi",
              "country": "India",
              "latitude": 9.925,
              "longitude": 76.26
            },
            "name": "Kochi, India"
          }
        },
        {
          "id": "755541891155580",
          "created_time": "2014-08-01T21:00:19+0000",
          "place": {
            "id": "107514862611377",
            "location": {
              "city": "Kochi",
              "country": "India",
              "latitude": 9.925,
              "longitude": 76.26
            },
            "name": "Kochi, India"
          }
        },
        {
          "id": "754540057922430",
          "created_time": "2014-07-30T18:31:13+0000",
          "place": {
            "id": "107514862611377",
            "location": {
              "city": "Kochi",
              "country": "India",
              "latitude": 9.925,
              "longitude": 76.26
            },
            "name": "Kochi, India"
          }
        },
        {
          "id": "753665468009889",
          "created_time": "2014-07-28T20:34:30+0000",
          "place": {
            "id": "107514862611377",
            "location": {
              "city": "Kochi",
              "country": "India",
              "latitude": 9.925,
              "longitude": 76.26
            },
            "name": "Kochi, India"
          }
        }
      ],
        "paging": {
        "cursors": {
          "before": "MTAyNTI3OTEzMDg0ODUyMAZDZD",
            "after": "NzUzNjY1NDY4MDA5ODg5"
        },
        "next": "https://graph.facebook.com/v2.8/802558306453938/tagged_places?access_token=EAACEdEose0cBAFN75pBmhv4WNOcZCE95FKuAjSVGN8qqLvCwdKAZAZBbrlGWeUD0oZCZCoUHaLCLdEPpRJr5y8C0ApP6QDdqKPf3WEeZAgf0zcFaEDQDXHzqWoB6Dapo5p6abE22OeEA8iDjfkxvCXxnf8C0LfZBUQtIENfqUQ1KwZDZD&pretty=0&limit=25&after=NzUzNjY1NDY4MDA5ODg5"
      }
    },
    "hometown": {
      "id": "107514862611377",
        "name": "Kochi, India"
    }
  }

    return json;
  }
}

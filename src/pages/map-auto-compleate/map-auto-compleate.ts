import {Component, ElementRef} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ModalController, LoadingController, ViewController, NavParams, ToastController} from 'ionic-angular';
import {OnInit, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MapsAPILoader} from 'angular2-google-maps/core';
import {Http} from '@angular/http';
import {TextToSpeech} from 'ionic-native';
import {SpeakerListPage} from '../speaker-list/speaker-list';
import {Backendservice} from '../../providers/backendservice';
import {SchedulePage} from '../schedule/schedule';
import { HelperServices } from '../../providers/helper';
<<<<<<< HEAD
import {PersonalPage} from '../personal/personal';
=======
>>>>>>> 5e2f11552b7c2027c41f41748fdbfe46adf87297
declare var google: any;

@Component({
  selector: 'map-auto',
  templateUrl: "map-auto-compleate.html",
  providers:[HelperServices]
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
  public array: any;
  @ViewChild("search")
  public searchElementRef: ElementRef;
  public PoiData: any

public currentPlace:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public backend: Backendservice,
              public view: ViewController,
              private mapsAPILoader: MapsAPILoader,
              private toastCtrl: ToastController,
              private helper:HelperServices,
              public http: Http) {
    this.decition = this.navParams.data;
   // this.title=this.decition== "current" ? "Your current location" : "Please select the manual location";
  }

  ngOnInit() {
    this.array = [{
      "html_attributions": [],
      "results": [
        {
          "geometry": {
            "location": {
              "lat": 34.1365544,
              "lng": -118.2942
            },
            "viewport": {
              "northeast": {
                "lat": 34.17926335,
                "lng": -118.25648635
              },
              "southwest": {
                "lat": 34.08447234999999,
                "lng": -118.32683735
              }
            }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
          "id": "05c6ca02daa5dd710749f5a0d76de488faef8b4c",
          "name": "Griffith Park",
          "opening_hours": {
            "open_now": true,
            "weekday_text": []
          },
          "photos": [
            {
              "height": 2255,
              "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/113986857380589434567/photos\">John Lucien Grillo</a>"
              ],
              "photo_reference": "CoQBdwAAAFnfKLYcEeuKBSbr-0lBCNoePFjBRC1JaSohrVbiUCyB9cdgHqGSV2CNgQ9iV6yCMsJ2GsBmHclRLr39fchfpR0mLLJzE658ZTp2Ih45aB7s6mrlSqmdXqgTOrF-6IwHVcLPrKqMKTCKAsUMu4X7SzSXJ0gqTRD0SICgIJfJoo35EhAoBNsN1RGqb13olSTWtVaWGhRHauC5K4yTNzwZJUkWFyAbLu83GQ",
              "width": 3981
            }
          ],
          "place_id": "ChIJ9590IY3AwoARquS6ie60MUc",
          "price_level": 0,
          "rating": 4.6,
          "reference": "CmRRAAAAGcvsalU_Q92nw3zoUzGiB12JO1-1MckgwpXcEd5HzmDtu8L30f0qEUkENB3ooYAzORp-ttKUwpjumc5pvWA8Iktm1F5IAaLsG52-_uz4hkvWpCtcSoKo1L1IDUT-jPZXEhCcSlq6IJSnkz2m37INQMw_GhRe3eR7E8AdqymZ9pBQHbkOX-96rg",
          "scope": "GOOGLE",
          "types": [
            "park",
            "point_of_interest",
            "establishment"
          ],
          "vicinity": "4730 Crystal Springs Drive, Los Angeles"
        },
        {
          "geometry": {
            "location": {
              "lat": 34.146885,
              "lng": -118.322088
            }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
          "id": "8e701094f158541deab78c8f48a83aefe3927492",
          "name": "Forest Lawn - Hollywood Hills",
          "opening_hours": {
            "open_now": false,
            "weekday_text": []
          },
          "photos": [
            {
              "height": 1363,
              "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/117726216843145957022/photos\">Forest Lawn - Hollywood Hills</a>"
              ],
              "photo_reference": "CoQBdwAAAFYjWX2mBYSg7xVPx1BUXHP-JCKMLvbsJFPIyBGup-Wfba0kuqOFx4JHas_WkLsX9mRaba5X__IWQUZ46-srgIPWCu3AW-3NxlUjOJmrD9CPLx_EHBDQInbz-OlPYd4CixIDVUwH1Vl8FG0iHWLgJuXrPA-oCGzRXrLR0cz7GSU-EhAa7pLL_kHVsVEu8YQbd31KGhSUAyl7GxoZl9P2wzc63oaxdP41cw",
              "width": 1366
            }
          ],
          "place_id": "ChIJZ9ZE6cC_woARSvoAjIvQygc",
          "rating": 4.6,
          "reference": "CmRRAAAAO5DMEB5UTUzyIO-pM8gw7sWiXNcsgTfRGdLVngBLUOzzpAREo3t4-y650UtKT1xmXYmjqBKT130p8LIu7fAhUA9CdJxAX9GxVic1SskHcIv-w0ckOqhuTzFPUb_WsmysEhAWJ41MCT9i_WcT2WRnJ7YYGhT3MtXPHMCOgynDAE_JUc0D-IJy_w",
          "scope": "GOOGLE",
          "types": [
            "funeral_home",
            "park",
            "point_of_interest",
            "establishment"
          ],
          "vicinity": "6300 Forest Lawn Dr, Los Angeles"
        },
        {
          "geometry": {
            "location": {
              "lat": 34.100365,
              "lng": -118.294328
            },
            "viewport": {
              "northeast": {
                "lat": 34.1004073,
                "lng": -118.2942379
              },
              "southwest": {
                "lat": 34.1003453,
                "lng": -118.2943703
              }
            }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
          "id": "69737ee3dd0192737d6861d0a8c9eff915dad2f9",
          "name": "Barnsdall Art Park",
          "opening_hours": {
            "open_now": true,
            "weekday_text": []
          },
          "photos": [
            {
              "height": 564,
              "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/105763066260246303000/photos\">Barnsdall Art Park</a>"
              ],
              "photo_reference": "CoQBdwAAAHNeKOj4L_uMUtRDBp3j4QcQt1bXg35I1Bmt31Z17I3BKpngn81uVkOhw_7798GUqxBEuq0BBu0qw8zm64rPozCCgfKSxKiC8Mn5pgM1otng75CJtSQKt7qOUnAil2nV9I3rH6MvQcDIGM4hPDclLd5HLN4HNDcsgYGYTp719yP1EhCqJYuAz9UsH8K4Mo6kHNSDGhRZfSYx1u0WWAuw9KKRp2e2d4Aszw",
              "width": 564
            }
          ],
          "place_id": "ChIJUVP08avAwoARSjE9SvDAHkQ",
          "rating": 4.5,
          "reference": "CmRRAAAAUQDjBM6R5u5C6NnNmeqs-wPpO4fMuURpagOS-uFJMZjgz5VL8v50GmyfN3IoihfieWmfyh3pwsjfF_ZDsOSpWpH32GqkGX99kiXbA2rB3UiSb4rKep7fgsz5yGHydjRxEhC53otU9dBz3WGHpSHLiaEJGhQPp1-kc30WHAU3cHoci__j3N4dQQ",
          "scope": "GOOGLE",
          "types": [
            "park",
            "art_gallery",
            "point_of_interest",
            "establishment"
          ],
          "vicinity": "4800 Hollywood Boulevard, Los Angeles"
        },
        {
          "geometry": {
            "location": {
              "lat": 34.0755684,
              "lng": -118.3544883
            },
            "viewport": {
              "northeast": {
                "lat": 34.07642444999999,
                "lng": -118.3544685
              },
              "southwest": {
                "lat": 34.07528305,
                "lng": -118.3544949
              }
            }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
          "id": "5e68ac9c596806036c391fbf9b81210021190509",
          "name": "Pan Pacific Park Recreation Center",
          "opening_hours": {
            "open_now": false,
            "weekday_text": []
          },
          "photos": [
            {
              "height": 972,
              "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/102699685875090087083/photos\">Fahrul Silvian</a>"
              ],
              "photo_reference": "CoQBcwAAAAC6LCqs0-nrylYXULgGeS4_-J50nZ7J68eUjGW5a1nnAVOrL7QyAzGpYEELk3_EXfCUvnk5VY2YPE06gFmMQZautQtRkBafroXx74FL62l6ValArD2hr9xfxOQ2_MSsj93Mmqyji_8OMcHNY_gkGl1wHVoyfW6VBqJ--JmdC2lfEhBG15IyjQa9dwWB-bLrZ1VaGhQH_j2MW3QxCqP_VzuBfNycFoP6-A",
              "width": 1296
            }
          ],
          "place_id": "ChIJMy_Fgi65woARlcdFNGLeztU",
          "rating": 4.2,
          "reference": "CmRSAAAA2nhxemBxpHzF7Kg2MRPywLKvQCXLQ7XpkQdAsdtsoAVaojsiV2NmrZwcstwIlbf0914Hybabvfq9VT7qaIZAD8RHCt6MJiunGCK1mFaxd7WJvpNG9KmxwEhW8d04DHLoEhCb4gZfGXLFodxTL0rFjOt0GhQUj21FDAiLf5S2ykaleonb4695PQ",
          "scope": "GOOGLE",
          "types": [
            "park",
            "point_of_interest",
            "establishment"
          ],
          "vicinity": "7600 Beverly Boulevard, Los Angeles"
        },
        {
          "geometry": {
            "location": {
              "lat": 34.09146370000001,
              "lng": -118.350834
            },
            "viewport": {
              "northeast": {
                "lat": 34.09180590000001,
                "lng": -118.3508335
              },
              "southwest": {
                "lat": 34.0904371,
                "lng": -118.3508355
              }
            }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
          "id": "4dc214b9d736eb1e56cfb156dc9120e1a6e11c69",
          "name": "Plummer Park",
          "opening_hours": {
            "open_now": false,
            "weekday_text": []
          },
          "photos": [
            {
              "height": 1836,
              "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/104731367217913646261/photos\">John Billings</a>"
              ],
              "photo_reference": "CoQBdwAAAIyYrlgn9aeJnjEIi6qJa--ttML4zKKC1ZqujQU-wyQUlYC2dT7MZpiBWMDQNimMWl4NPUuOKa0QuXInn_jAak7eAW7-I0KXSCbwkRINM2BJ7VqbgI-e8j6r5Vy4idY2eyYi7_vloG54027JiUX6aRnMdTph56B1aXtefrkAdSK2EhDCkSoIpR-vZ4DYELNzOHuFGhQ5feTO1-8h5kKR70vLxlKu_1PinQ",
              "width": 3264
            }
          ],
          "place_id": "ChIJ7aDk5dm-woARC-mb9sSsnBU",
          "rating": 4.4,
          "reference": "CmRRAAAAucHNOkAbc5hSV7x7rcrf1UPqCBZg19k1odW1C0sSgUpBFB2iDtc7rq2sKnNdGWZKk-zvqQDfa17V1nX4pzHhK-E4rtSBIFTxP9klxrSUwiyas2fmk7omN4TGZYWQzcatEhD6PL0VLLbRS0OOLe7MmTABGhSGlfOq4fbLIfO9PbZBKv3vre8msg",
          "scope": "GOOGLE",
          "types": [
            "park",
            "point_of_interest",
            "establishment"
          ],
          "vicinity": "7377 Santa Monica Boulevard, West Hollywood"
        },
        {
          "geometry": {
            "location": {
              "lat": 34.1054841,
              "lng": -118.2795905
            },
            "viewport": {
              "northeast": {
                "lat": 34.10558429999999,
                "lng": -118.2795498
              },
              "southwest": {
                "lat": 34.1054507,
                "lng": -118.2797126
              }
            }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
          "id": "f83e882563add9cfdec3fdfe235116238d685e0b",
          "name": "Shakespeare Bridge Garden",
          "opening_hours": {
            "open_now": true,
            "weekday_text": []
          },
          "photos": [
            {
              "height": 2340,
              "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/100793167108079106862/photos\">Marlon Guerrero</a>"
              ],
              "photo_reference": "CoQBdwAAAGfP3i2_q66H82KUBy9HP7P91Y0PGPHlN2Eolb2KUqdfGsL5YZDbRTQkcAIPbkXdT2-LLZCgnom1Kj0pvWeCo3qKbAbPScwy103wndFZ_cH8bZjZmrkhhBKqdVWh-OKStrJVZE8xAqGcPDWJFKxK61CDPIXEJW1LtGgTX6fDb05wEhDl-MH8qyjQxBdGJR9CHTCZGhSmxXBdIefo9-B059o5CaubiEnQKw",
              "width": 4160
            }
          ],
          "place_id": "ChIJXWLrhLbAwoARhWHgcCwHrvQ",
          "reference": "CmRSAAAAINZTXpLwCemDVtDAfeSy21O-2EbzBC8pSVPuN3WNvqBXU6y17hEFM-5MW-CE4zhBMKunr-ZTbH-V5OPgas8R3TTW5cb8YY_AOKPcOQpGEgevG7TH4cL_6c3XNx-5RSi9EhCwoPEaEPzrWzR2WYskZtqBGhTrsFzD9C0_2aNGTCIyeVAEcbRESw",
          "scope": "GOOGLE",
          "types": [
            "park",
            "point_of_interest",
            "establishment"
          ],
          "vicinity": "Monon Street, Los Angeles"
        },
        {
          "geometry": {
            "location": {
              "lat": 34.116428,
              "lng": -118.3421476
            },
            "viewport": {
              "northeast": {
                "lat": 34.11646835,
                "lng": -118.3419606
              },
              "southwest": {
                "lat": 34.11635935,
                "lng": -118.3427086
              }
            }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
          "id": "7c9341edb9e301362a4459fa38dd90372342d478",
          "name": "Hollywood Bowl Overlook",
          "photos": [
            {
              "height": 1536,
              "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/112554191634498422427/photos\">American Riviera Tours</a>"
              ],
              "photo_reference": "CoQBdwAAAAu6fyPeSKzEBf9JzndoCtNHR4HS7pKcRv3kWwrIkiPkqSOlYuU6E6PcMJEd-AF_5_9GcQOkcPeEMFPbHuiaI51uc_F9RgBN5c2fZgJTOGV8obtMrqRimPMr5IBq2jb2x1tq2r1PzUNSLF-IOhlZLMP8yMLEJpqXOJZzKCrib3_vEhCedbcgLYGsMpdmpjNOoaYMGhTNpqH5AdIUmSchh9WbY23TZLj4PQ",
              "width": 2048
            }
          ],
          "place_id": "ChIJk1R_FwO_woARGMOiMiXmMwU",
          "rating": 4.5,
          "reference": "CmRRAAAAvHEkQpM3LoNnF2oJI42rtA4X9VXpEQ-qW8UP2jPig0aVOafNw5bUefrZGV2WQz4vpONVNyHHuZHAoLBOpENKq52zwbJ5M2S6W7o2LlABxkf39iL1KqVSV4gd9dCO1iwWEhDDdgaAMUv3HCmsAbrhwZKRGhTz0JYOARaNMcfKZSLurkt19lPEVA",
          "scope": "GOOGLE",
          "types": [
            "park",
            "point_of_interest",
            "establishment"
          ],
          "vicinity": "7036 Mulholland Drive, Hollywood"
        },
        {
          "geometry": {
            "location": {
              "lat": 34.0748827,
              "lng": -118.2607508
            }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
          "id": "856138ba4815f66ed34a7a26524b9570a494cd51",
          "name": "Echo Park",
          "opening_hours": {
            "open_now": true,
            "weekday_text": []
          },
          "photos": [
            {
              "height": 2988,
              "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/107897615804439181956/photos\">Pedro Mena</a>"
              ],
              "photo_reference": "CoQBdwAAABhvpmF3S7rIokQEnpYof1kDWZv7i4iKmm-pTmoohUglC9RPoFC3iedzUfSL7YS-wv1Rbkrpq-rztbracBL3-3StUZSJ5Y_ooHiwePgfV5RasJXfxJWeW__Bcnm7_08sHK5NfPHwAHzdOBQhsDLEBEVXN0ZCQQdWxR2RzE_AWO31EhANDj1QkbBpu2XBbn-0hlBEGhSV3ywBoliINQ0PNvLQboPGLbTMMg",
              "width": 5312
            }
          ],
          "place_id": "ChIJwRl1xQTHwoARda1jOaCkHeA",
          "rating": 4.6,
          "reference": "CmRSAAAAQIBf1bbZjsitcDS90HQ764O_55-6HF0kuyl2itAGA7Fmy8YWaYbLzo6g1Im3vbpM41dEriXMxIvWbYSVJjKcjnfACNSaPuxN8AreScni6Gpv8Sk3g_S-E5I8_drXyXM_EhC6KlkKO2Q_TxSxUT7s4WGgGhRaHiwit0h4ngPz3jvxq5-6VQ8k1A",
          "scope": "GOOGLE",
          "types": [
            "park",
            "point_of_interest",
            "establishment"
          ],
          "vicinity": "1632 Bellevue Avenue, Los Angeles"
        },
        {
          "geometry": {
            "location": {
              "lat": 34.1272361,
              "lng": -118.3111101
            },
            "viewport": {
              "northeast": {
                "lat": 34.12735055,
                "lng": -118.31108125
              },
              "southwest": {
                "lat": 34.12719795,
                "lng": -118.31119665
              }
            }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
          "id": "25ecda327b3f8175290e1994f0d456fd942acc49",
          "name": "Bronson Canyon-Griffith Park",
          "opening_hours": {
            "open_now": true,
            "weekday_text": []
          },
          "photos": [
            {
              "height": 3024,
              "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/104236950257245337650/photos\">Angel S</a>"
              ],
              "photo_reference": "CoQBdwAAAB0oXJpXC-YcJYxRoovItaoYnqRcnjmp4diYdi5_AQzwydAtSCcj5nAb9-LQqfZHLtNhN3B_tkHuCK9PjWPQtuts_KT8akFtgnFtGbXHuC-gV1_sEKviTm5OU4_24MPSoXtvJioeYG0pveD7FjGccYUN_nCi_N6Q1E4nm2h18Ic3EhA1YgnhygfkwTF1Jdx_gY6uGhQS6UYnmND9yT8PTbvAbH-Np2mK-g",
              "width": 4032
            }
          ],
          "place_id": "ChIJBWuuCXq_woAREMe1BE5RDoA",
          "rating": 4.4,
          "reference": "CmRSAAAAJN2wfaOiK078cFg_FokpAfuk2c1bK7PeyuHB4vWNVp8e_kWKF1xPMu_x7M82k4gc96GA7hrM3p5kuDab9oL06_4ZduWRjW0CV7Mykwfl9C3cdT1aBt_NfeqY3MrSafSeEhAOWHHpBOcwCTrzgWNN7nWzGhQeMl__3jhMqKMrjGC2gYLqtoOyMQ",
          "scope": "GOOGLE",
          "types": [
            "park",
            "point_of_interest",
            "establishment"
          ],
          "vicinity": "3200 Canyon Drive, Los Angeles"
        },
        {
          "geometry": {
            "location": {
              "lat": 34.0563289,
              "lng": -118.2467713
            },
            "viewport": {
              "northeast": {
                "lat": 34.05723429999998,
                "lng": -118.2462399
              },
              "southwest": {
                "lat": 34.0560271,
                "lng": -118.2483655
              }
            }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
          "id": "c511ffe5a4d1369cf430ac8394357d094105a940",
          "name": "Grand Park LA",
          "opening_hours": {
            "open_now": true,
            "weekday_text": []
          },
          "photos": [
            {
              "height": 1080,
              "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/101658380449234283722/photos\">Mehran Irdmousa</a>"
              ],
              "photo_reference": "CoQBdwAAAJ5otnp1vm2CjTZrMhDDqp0Cas99rmO1qmmaVY1uMN5nuWXjF2rrIgQgAF7J1Dj6v0R9BTbjI4CFAGk8RHtqGMbOYM9985eyS0H0O3JEOXFpWCUuoqXLzRTMbOJp1O2F-pm30Nih6MCSsfeZplymqbNtmNNBYrNecwcbeBtNU0IUEhCrCSXupEpvvrY6VKR5vULDGhSjF6PIgG55hxf-3HrhBZuDLnqTMA",
              "width": 1920
            }
          ],
          "place_id": "ChIJ_STuCE7GwoAR3vCqfD2J9es",
          "rating": 4.5,
          "reference": "CmRSAAAAs_UYPjsoH18yn6dAh0xMUfNsR5OjXdfwMIPgk9GhvnxTDXo9x1lxbl9byzdSfXOXeGrrixMbIGfgYPtQWCvKXRfRB78t3-XadaR1fG_qzYoNA7-jMVL5uUE5vo-AQwJ1EhC-9NOIyf0Ymb7yMfgNeYpkGhRiXiHFF4yDxhRmaltaYtLojZ1k9A",
          "scope": "GOOGLE",
          "types": [
            "park",
            "point_of_interest",
            "establishment"
          ],
          "vicinity": "200 North Grand Avenue, Los Angeles"
        },
        {
          "geometry": {
            "location": {
              "lat": 34.0921858,
              "lng": -118.2644873
            }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
          "id": "ed1ab14b63276ae57035da852d7a967fa60c47d0",
          "name": "Silver Lake Dog Park",
          "opening_hours": {
            "open_now": true,
            "weekday_text": []
          },
          "photos": [
            {
              "height": 1440,
              "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/115458926314300885298/photos\">Monica Perez</a>"
              ],
              "photo_reference": "CoQBdwAAAE196butq9a0RXW6mQoDdGjSHsz8QGD9nzlhM2SSx4VMkfYC6WDkK7ymBq-l5vTMY0rJJCQihLgdjhr1F87ic5CxmSOhT2SFAJ6Gq2z_pSYGog0jmH5DWCocfFLsDfSISz5d0cylxoC2_40oUgenLW-Gcj2YvQE_ZJlxitdF8UcDEhDzmwAdhe16Y41E6nbxPBdrGhQ7SwG9N-8-6xCQAZ7Lc27qvZHmNQ",
              "width": 2560
            }
          ],
          "place_id": "ChIJA9PftDrHwoARcwyoZNt3KxQ",
          "rating": 3.9,
          "reference": "CmRRAAAAXPu_3RuUvvnqpC-vWFMfKb6tNYq1Aji4CLkBuzl9wi0D15AJIbJSgyrDUVIVh_NzjIKtHj7NP_QcF9sAZn4Nf-vptry7SVSvcBkrJtcDhy10GvRIdTBLyX0iK5Ac1LecEhB1TCSpzedDZcHPDgZSBXBvGhSn5n2WnTy84MWcdmCJEHoX25uXrA",
          "scope": "GOOGLE",
          "types": [
            "park",
            "point_of_interest",
            "establishment"
          ],
          "vicinity": "1850 West Silver Lake Drive, Los Angeles"
        },
        {
          "geometry": {
            "location": {
              "lat": 34.11509789999999,
              "lng": -118.412253
            }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
          "id": "64bb4d85288dbd0075b5d35b9004362d590ba3f0",
          "name": "Franklin Canyon Park",
          "photos": [
            {
              "height": 1840,
              "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/103971031311463408320/photos\">Justin Ramey</a>"
              ],
              "photo_reference": "CoQBdwAAAG87KpuoPXwLmSwiIC_7z7FhXwg3-C4r_d6wjl-IJm6X9PVG5hvCakD1N6UseKHISnoIS1XiShRt_TRcYHHirUc83WtBVXYyQQU-SWfE6I6QHZCk8fNVwxWxlCiZOFr10umIwZM4fZdt39WCOnEgm9M97etimGfiLo3-FH60otRJEhDiBNugQfnzue_LGo_hOXTQGhRwt2xiDYIj0QgFswyGw9o71tDCkQ",
              "width": 3264
            }
          ],
          "place_id": "ChIJ83E_j8u9woAR-7q9BTf1VA8",
          "rating": 4,
          "reference": "CmRRAAAAQaS3iaJntyW76QN9L-5HkoUW5yoLfD4HDKFkDGb1BQB8Ql8tEleJjtsTri0QP6i8pwnwo9st0NVcS-wZUXN5GrNUW2YLT6wwNkUiFHdvZ-lbQQvAx4o1fjmlWcYbkCNFEhAb6HE-tKi2Iqr15h_F606cGhQBfc8jLbAu2Y2QlPTuPntCtCyhcQ",
          "scope": "GOOGLE",
          "types": [
            "park",
            "point_of_interest",
            "establishment"
          ],
          "vicinity": "2600 Franklin Canyon Drive, Beverly Hills"
        },
        {
          "geometry": {
            "location": {
              "lat": 34.0621824,
              "lng": -118.3757017
            },
            "viewport": {
              "northeast": {
                "lat": 34.06223704999999,
                "lng": -118.3731622
              },
              "southwest": {
                "lat": 34.06201845,
                "lng": -118.3765482
              }
            }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
          "id": "fdbdc4e2c5dcf5d4733734964c7b77c60af2abd9",
          "name": "La Cienega Park",
          "opening_hours": {
            "open_now": true,
            "weekday_text": []
          },
          "photos": [
            {
              "height": 2988,
              "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/113098895713494278865/photos\">Orni Shia</a>"
              ],
              "photo_reference": "CoQBdwAAACn4ezlEVzlhtINfwW9C607eStR9lSGyOYRAIFSJC41GoIpW-8hJh-11Au05iqYRVdGe88RL6n1V6JGUEglceni9S3c7FWLQDh7O_mey_JfLYzAmAF33c2JGo4hJXWKYlASN5fsZvNINb3Nq8sqKS3W1LP0MCw9nqDJGr_Wwd3bKEhDLdYqa5zlcU2VAYNFX5IYZGhSMFsX5-vgkRrrh0qECLdaR6ImPOA",
              "width": 5312
            }
          ],
          "place_id": "ChIJHQAmqUa5woARIxFjFwfdgnc",
          "rating": 4.3,
          "reference": "CmRRAAAAIYSRfSBf6ES1VnsyoIh6dPXHPUko2qzSK5MByuI_uJdriEPvTMP2OyNKce4QTFo8QakCX04FVRbZF-VJrlprSfoGy99DHTBnRVFB1dtoWnxnewIxXxuCY_R6iGzTBImaEhAlIhp8MD8nrkBwZKy1Wr7jGhSWYNms9n7LkTM_rgHvu_yKwKo2zw",
          "scope": "GOOGLE",
          "types": [
            "park",
            "point_of_interest",
            "establishment"
          ],
          "vicinity": "8400 Gregory Way, Beverly Hills"
        },
        {
          "geometry": {
            "location": {
              "lat": 34.12393869999999,
              "lng": -118.3907507
            },
            "viewport": {
              "northeast": {
                "lat": 34.12447494999999,
                "lng": -118.3897436
              },
              "southwest": {
                "lat": 34.12232994999999,
                "lng": -118.3910864
              }
            }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
          "id": "6b812f5ddd25974343011a980c731877bf762784",
          "name": "Fryman Canyon Park",
          "photos": [
            {
              "height": 1265,
              "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/108490253992968844269/photos\">Karen Rox</a>"
              ],
              "photo_reference": "CoQBdwAAAEMCamwOclxXTFPQsiZSBfPcm50la-BujNKrIbnyzW1ait9SAjrVTulyu24PHoWUr0o3ddnLhuolHGgVDDLJV6LPShLcFAvjg05YDkAxXo4GKWve_xZlaFLc-qWzqHapNZzfkzwqzbY4tmqBpk4D7_J-pNXCno8owb2gWAXS7MgIEhBRn0lXMc6r19sRRsYkKe8GGhRDODMNrnqutbD1L_gf21g7uMBB-Q",
              "width": 949
            }
          ],
          "place_id": "ChIJIfUwxXm-woARZyG9fU6zKTY",
          "rating": 4.4,
          "reference": "CmRRAAAAZ2B6QdoA1-cnKYf9NKgnvenyG6yJ7uz1q-jcIu3AsBmXpDF7ige0SX5tcPoJ_SvbqX4KhVZRaxVB_l_oaDKaBBW8nS8qzbWYgFeDnPhs61C5TxUO5iuAi9uY77Gck-WNEhD0zM3qChloF4RdN1nc8CEaGhSMq7tbRccWBxTejK7dHTh4ZzTspQ",
          "scope": "GOOGLE",
          "types": [
            "park",
            "point_of_interest",
            "establishment"
          ],
          "vicinity": "8401 Mulholland Drive, Studio City"
        }
      ],
      "status": "OK"
    }]
    this.array = this.array[0].results;
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;
    this.searchControl = new FormControl();
    this.decition=="current"? this.setCurrentPosition():this.loadAutoCompleateApi();
  }
  private loadAutoCompleateApi(){
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.latitude = autocomplete.getPlace().geometry.location.lat();
        this.longitude = autocomplete.getPlace().geometry.location.lng();
<<<<<<< HEAD
        // this.helper.showToast("you selected ");
=======
        this.helper.showToast("you selected ");
>>>>>>> 5e2f11552b7c2027c41f41748fdbfe46adf87297
        this.locationset(this.latitude, this.longitude);
      });
    });
  }
  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
        this.locationset(this.latitude, this.longitude);
      });
    }
  }
  public locationset(lat: any, long: any) {

    let url = "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + long + "&sensor=true'";
    this.backend.load(url).then(data => {
      this.helper.speak("you selected " + data.results[0].address_components[2].long_name + " .");
<<<<<<< HEAD
      this.currentPlace=data.results[0].formatted_address;
=======
>>>>>>> 5e2f11552b7c2027c41f41748fdbfe46adf87297
     this.helper.showToast("you selected " + data.results[0].formatted_address + " .");
      console.log(data.results[0].address_components[2].long_name);
      this.getinterest(lat, long);

    });

  }
  public description(item: string) {
    let url = "https://en.wikipedia.org/w/api.php?action=query&prop=description&titles=kaloor&prop=extracts&exintro&explaintext&exsentences=3&format=json&redirects&callback=?";
    this.backend.load(url).then(data => {
      console.log(data);
    });

  }
  public getinterest(lat: any, lon: any, radius?: any) {
    this.poibutton = true;
    if (radius == null) {
      radius = 10000;
    }
    //let interests: any = ["park", "museum", "amusement_park", "art_gallery", "aquarium", "atm", "beauty_salon", "book_store", "movie_theater", "casino", "bowling_alley", "bus_station", "cafe", "city_hall", "restaurant", "shopping_mall", "spa", "stadium", "zoo", "hair_care", "gym", "grocery_or_supermarket", "home_goods_store"];
    let interests: any = ["park", "museum", "amusement_park"];
    for (let currentinteres of interests) {
      let url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + lon + "&radius=" + radius + "&type=" + currentinteres + "&key=AIzaSyBmbRGUuc0yB4vKbxsW8BUr4hZ546opppM";
      this.http.get(url).subscribe(res => {
        this.res = res;
        this.res = JSON.parse(this.res._body);
        let resultlength = this.res.results.length;
        if (resultlength > 0) {
          for (let i = 0; i < resultlength; i++) {
            let name = this.res.results[i].name;
            console.log(this.res.results[i]);
            this.PoiData = this.res.results[i];
            this.array.push(this.PoiData);
            this.array[i]["interest"] = currentinteres;
          }
        }
        else {

          this.poibutton = false;
        }

        if (this.array.length > 0) {

          this.poibutton = true;
        }

      });
    }
  }
  // public speak(text: string) {
  //   TextToSpeech.speak(text)
  //     .then(() => console.log('Success'))
  //     .catch((reason: any) => console.log(reason));
  // }
  // public toast(text: string) {
  //   let toast = this.toastCtrl.create({
  //     message: text,
  //     duration: 10000,
  //     position: 'top'
  //   });
  //   toast.present();
  // }
  public showpoi() {
    this.navCtrl.push(SchedulePage, this.array);
  }
  public showuserInterests(){

     let mockdata = this.backend.mockfb();
     this.navCtrl.push(PersonalPage, mockdata);

  }
  public dismiss() {
    this.view.dismiss();
  }
}

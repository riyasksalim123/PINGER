import { Injectable } from '@angular/core';
import {  ToastController,ModalController,NavController } from 'ionic-angular';
import { TextToSpeech } from 'ionic-native';
@Injectable()
export class HelperServices {
  constructor(private toastCtrl: ToastController,public modalCtrl: ModalController,private navCtrl:NavController) {}

public showToast=(message?: string)=> {
        const toast = this.toastCtrl.create({ message: message, showCloseButton: true,closeButtonText: 'Ok'});
        toast.present();
    };
public speak = (text: string) => TextToSpeech.speak(text).then(() => console.log('Success')).catch((reason: any) => console.log(reason)); 
public goToOtherPage = (page:any,params?:any) => this.navCtrl.push(page,params);           
   
public modalRedirect=(page:any)=> {let modal = this.modalCtrl.create(page);modal.present();};
        
        
   


}
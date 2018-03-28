import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';
import { AlertController } from 'ionic-angular';

@Injectable()
export class NetworkProvider {

  public networkAlert = this.alertCtrl.create();
  public previousStatus: any;
  firstTime = false;

  constructor(public network: Network, public alertCtrl: AlertController) {
  }

  detectNetwork(){
    this.network.onConnect().subscribe(data => {    
      if (!this.firstTime && this.previousStatus == 0){
        this.networkAlert.dismiss();
      }
      
      this.previousStatus = 1;
    }, error => console.error(error));
   
    this.network.onDisconnect().subscribe(data => {
      if (this.previousStatus == 1 || this.previousStatus == null){
        this.checkNetwork();
      }

      this.previousStatus = 0;
    }, error => console.error(error));
  }

  checkNetwork(){
      this.networkAlert = this.alertCtrl.create({
        title: 'Network is Down',
        message: 'Please, make sure that you are connected to the network in order to proceed.',
        enableBackdropDismiss: false
      })

      this.networkAlert.present();
  }
}

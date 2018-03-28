import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { NetworkProvider } from '../providers/network/network';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, network: NetworkProvider) {
    platform.ready().then(() => {
      network.detectNetwork();
    });
  }
}

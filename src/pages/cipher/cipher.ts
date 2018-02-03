import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MusicPage} from "../music/music";

/**
 * Generated class for the CipherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cipher',
  templateUrl: 'cipher.html',
})
export class CipherPage {

  ciphers = ['C', 'C#', 'D'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CipherPage');
  }

  searchMusic() {
    this.navCtrl.push(MusicPage, {
      ciphers: this.ciphers
    });
  }
}

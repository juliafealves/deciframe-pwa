import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CipherPage} from "../cipher/cipher";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  openCipher() {
    this.navCtrl.push(CipherPage);
  }
}

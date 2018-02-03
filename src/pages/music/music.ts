import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MusicProvider} from "../../providers/music/music";

@Component({
  selector: 'page-music',
  templateUrl: 'music.html',
})
export class MusicPage {

  public musics: any;
  public ciphers: any;
  public ciphersChoose: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public musicProvider: MusicProvider) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicPage');
    this.ciphers = this.navParams.data.ciphers;
    this.search(this.ciphers);
  }

  public search(ciphers)
  {
    this.musicProvider
      .search(ciphers)
      .subscribe(response =>
      {
        this.musics = response;
      });
  }

  public open(url)
  {
    window.open(url, '_system');
  }

}

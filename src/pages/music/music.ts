import { Component } from '@angular/core';
import {LoadingController, NavController, NavParams} from 'ionic-angular';
import { MusicProvider } from "../../providers/music/music";

@Component({
  selector: 'page-music',
  templateUrl: 'music.html',
})
export class MusicPage
{
  public loading;
  public musics;
  public musicSuggestions;
  public ciphers = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public musicProvider: MusicProvider,
              public loadingCtrl: LoadingController)
  {
    this.loading = this.loadingCtrl.create({ content: "Carregando..." });
  }

  ionViewDidLoad()
  {
    this.ciphers = this.navParams.data.ciphers;
    this.search(this.ciphers);
  }

  /**
   * Search music based on informed ciphers.
   *
   * @param ciphers
   */
  public search(ciphers)
  {
    this
      .musicProvider
      .search(ciphers)
      .subscribe(response =>
      {
        this.musicSuggestions = response.filter(music => {
          if (music.diferenca.length == 0){
            return music;
          }
        });

        this.musics = response.filter(music => {
          if (music.diferenca.length > 0){
            return music;
          }
        });
        this.loading.dismiss();
      });
  }

  /**
   * Open url in browser.
   *
   * @param url
   */
  public open(url)
  {
    window.open(url, '_system');
  }

}

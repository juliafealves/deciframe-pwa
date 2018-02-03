import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the MusicProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MusicProvider {

  static readonly CIFRAME_URI = 'https://ciframe-api.herokuapp.com/similares';

  constructor(public http: HttpClient) {}

  public search(ciphers)
  {
    return this.http.get(MusicProvider.CIFRAME_URI + '?acordes=' + ciphers);
  }

}

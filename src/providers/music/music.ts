import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class MusicProvider
{
  static readonly CIFRAME_URI = 'https://ciframe-api.herokuapp.com/similares';

  constructor(public http: HttpClient) {}

  public search(ciphers)
  {
    return this
      .http
      .get(MusicProvider.CIFRAME_URI + '?acordes=' + ciphers)
      .map(result => <any[]>(result));
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http'

import { IonTagsInputModule } from "ionic-tags-input"

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CipherPage } from  '../pages/cipher/cipher';
import { MusicPage } from  '../pages/music/music';
import { MusicProvider } from '../providers/music/music';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CipherPage,
    MusicPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonTagsInputModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CipherPage,
    MusicPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MusicProvider
  ]
})
export class AppModule {}

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AgmCoreModule } from '@agm/core';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CountryPage } from '../pages/country/country';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ModalsService} from "./services/modals.service";
import {CountriesService} from "./services/countries.service";
import {QuestionsService} from "./services/questions.service";
import {GamePage} from "../pages/game/game";
import {NumberFormatPipe} from "./pipes/number.format.pipe";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CountryPage,
    GamePage,
    NumberFormatPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD88Itl-8yLLJxhCG7EHQtSNA3TrK52Aik'
    }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CountryPage,
    GamePage
  ],
  providers: [
    ModalsService,
    CountriesService,
    QuestionsService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

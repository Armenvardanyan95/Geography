import { Component, EventEmitter } from '@angular/core';
import { NavController, NavParams, ViewController} from 'ionic-angular';
import {ModalsService} from "../../app/services/modals.service";

@Component({
  selector: 'page-country',
  templateUrl: 'country.html'
})
export class CountryPage {

  country: any;
  neighbours: any[];
  newModal: EventEmitter<any> = new EventEmitter();

  constructor(public navCtrl: NavController, private params: NavParams,
              public viewCtrl: ViewController, private modalsService: ModalsService) {
    this.country = this.params.get('country');
    this.neighbours = this.params.get('neighbours');
    console.log(this.country)
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  openCountryModal(country): void {
    this.modalsService.modalOpened.emit(country);
  }

}

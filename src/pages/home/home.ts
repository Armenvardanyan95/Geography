import { Component } from '@angular/core';
import { NavController, ModalController, Modal } from 'ionic-angular';
import {FormControl} from '@angular/forms';

import {CountryPage} from '../../pages/country/country';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import {ModalsService} from "../../app/services/modals.service";
import {CountriesService} from "../../app/services/countries.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private allCountries: any[] = [];

  autocomplete: FormControl = new FormControl();
  countries: any[] = [];
  noCountriesFound: boolean = false;

  constructor(public navCtrl: NavController, private countriesService: CountriesService, private modalCtrl: ModalController,
              private modalsService: ModalsService) {

    this.countriesService.getAllCountries().subscribe(countries => this.countries = this.allCountries = countries);

    this.autocomplete.valueChanges
      .debounceTime(1000)
      .map(query => this.allCountries.filter(country => country.name.toLowerCase().startsWith(query.toLowerCase())))
      .subscribe(countries => this.countries = countries);

    this.modalsService.modalOpened.subscribe((country) => {
      this.openCountryModal(country)
    });
  }

  openCountryModal(country) {
    const neighbours: any[] = this.allCountries.filter(cntry => country.borders.indexOf(cntry.alpha3Code) > -1);
    const modal: Modal = this.modalCtrl.create(CountryPage, {country: country, neighbours: neighbours});
    modal.present();
  }


}

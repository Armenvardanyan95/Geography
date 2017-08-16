import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from "rxjs";

import 'rxjs/add/operator/publishReplay';


@Injectable()
export class CountriesService {

  private allCountries: Observable<any>;

  constructor(private http: Http) { }

  getAllCountries() {
    if (!this.allCountries) {
      this.allCountries = this.http.get(`https://restcountries.eu/rest/v2/all`)
        .publishReplay(1)
        .refCount()
        .map(res => res.json());
      return this.allCountries;
    }
    return this.allCountries;
  }

}

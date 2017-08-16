import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {GamePage} from "../game/game";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, private modalCtrl: ModalController) {}

  play() {
    const modal = this.modalCtrl.create(GamePage);
    modal.present();
  }

}

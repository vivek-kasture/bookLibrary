import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})


export class RegisterPage {
  todo = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  logForm() {
    console.log(this.todo)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}

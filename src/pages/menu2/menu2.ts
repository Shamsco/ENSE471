import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Menu2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-menu2',
  templateUrl: 'menu2.html'
})
export class Menu2 {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  goBack()
  {
   this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Menu2Page');
  }

}

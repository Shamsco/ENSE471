import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Menu2 } from '../menu2/menu2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }
navigate(){
    this.navCtrl.push(Menu2,{
           
          });
}

}

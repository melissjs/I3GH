import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfileSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-search',
  templateUrl: 'profile-search.html',
})
export class ProfileSearchPage {

  userName: string = 'Melissa Schwartz';

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  getUserInformation(): void {
    this.navCtrl.push('ProfileSearchResultsPage', {
      userName: this.userName
    });
  }

}

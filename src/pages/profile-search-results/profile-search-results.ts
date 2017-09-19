import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubServiceProvider } from '../../providers/github-service/github.service';
import { User } from '../../models/user.interface';
import { Repository } from '../../models/repository.interface';

@IonicPage()
@Component({
  selector: 'page-profile-search-results',
  templateUrl: 'profile-search-results.html',
})
export class ProfileSearchResultsPage {

  userName: string;
  user: User;
  repositories: Repository[];

  constructor(private github: GithubServiceProvider, private navCtrl: NavController, private navParams: NavParams) {
  }

  getUserInformation(): void {
    this.github.getUserInformation(this.userName).subscribe((data: User) => this.user = data);
    this.github.getRepositoryInformation(this.userName).subscribe((data: Repository[]) => this.repositories = data);
    // this.github.mockGetUserInformation(this.userName).subscribe((data: User) => this.user = data);
    // this.github.mockGetRepositoryInformation(this.userName).subscribe((data: Repository[]) => this.repositories = data);
  }

  ionViewWillLoad() {
    this.userName = this.navParams.get('userName');
    if (this.userName) {
      this.getUserInformation();
    }
  }

}

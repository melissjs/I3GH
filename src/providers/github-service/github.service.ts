import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';

import { User } from '../../models/user.interface';
import { USER_LIST } from '../../mocks/user.mocks';
import { Repository } from '../../models/repository.interface';
import { REPOSITORY_LIST } from '../../mocks/repository.mocks';

@Injectable()
export class GithubServiceProvider {

  private baseUrl: string = "https://api.github.com/users";
  private reposUrl: string = "repos";

  constructor(private http: Http) {
    console.log('Hello GithubServiceProvider Provider');
  }

  getUserInformation(userName: string): Observable<User> {
    return this.http.get(`${this.baseUrl}/${userName}`)
    .do((data: Response) => console.log(data))
    .map((data: Response) => data.json())
    .do((data: Response) => console.log(data))
    .catch((error: Response) => Observable.throw(error.json().error || "Server error."));
  }

  getRepositoryInformation(userName: string): Observable<Repository[]> {
    return this.http.get(`${this.baseUrl}/${userName}/${this.reposUrl}`)
    .do((data: Response) => console.log(data))
    .map((data: Response) => data.json())
    .do((data: Response) => console.log(data))
    .catch((error: Response) => Observable.throw(error.json().error || "Server error."));
  }

  // mockGetRepositoryInformation(userName: string): Observable<Repository[]> {
  //   return Observable.of(REPOSITORY_LIST.filter(repository => repository.owner.name === userName)); 
  // }

  // mockGetUserInformation(userName: string): Observable<User> {
  //   return Observable.of(USER_LIST.filter(user => user.name === userName)[0])
  // }

}

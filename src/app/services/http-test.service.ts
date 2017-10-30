import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';



@Injectable()
export class HTTPTestService {

  private movies = [
    { name: 'movie 1', cat: '' },
    { name: 'movie 2', cat: '' }

  ];


  moviesChanged = new Subject<void>();
    constructor (private http: Http) {
      this.http = http;
    }


  fetchMovies() {
    //noinspection TypeScriptUnresolvedFunction
    this.http.get('https://api.themoviedb.org/3/movie/550?api_key=7b6fa38a478bbc291cadc265003b4728')
      .map((response: Response) => {
        const data = response.json();
        const extractedMovs = data.results;
        const movs = extractedMovs.map((mov) => {
          return {name: mov.name, cat: ''};
        });
        return movs;
      })
      .subscribe(
        (data) => {
          console.log(data);
          this.movies = data;
          this.moviesChanged.next();
        }
      );
  }
//movie population by category or all
  getMovies(chosenList) {
    if (chosenList === 'all') {
      return this.movies.slice();
    }
    return this.movies.filter((mov) => {
      return mov.cat === chosenList;
    })
  }


}
//

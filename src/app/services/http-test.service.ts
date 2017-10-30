import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';


import { Http, Response } from '@angular/http';

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
    this.http.get('http://swapi.co/api/people/')
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

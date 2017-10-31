import 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';




@Injectable()
export class MoviesService {

  private movieUrl: string;
  private apiKey:string;
  private moviePath:string;
  private genrePath:string;
  
  public movies: Array<any>;
  public genres: Array<any>;
  
    constructor (private http: Http) {
   
      this.movieUrl = "https://api.themoviedb.org/3/";
      this.apiKey = 'api_key=7d747601908140c3a4c8b02195bc7786';
      this.moviePath = 'https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=7d747601908140c3a4c8b02195bc7786';
      this.genrePath = `${this.movieUrl}genre/movie/list?${this.apiKey}&callback=jQuery22400132628371243029_1471207855881&_=1471207855884`;
      
      this.movies = [];
      this.genres = [];
      
    }

  //return json object
  public extractData = (res: any): any => {
      try {
        const body = res.json();
        return body || [];
      } catch (err) {
        return [];
        }
    }
  
  //error handling method
    public handleError = (error:any): any => {
    if(error && error.name == 'TimeoutError') {
      return Observable.throw('TimeoutError');
    }else {
      const body = JSON.parse(error.body);
      const httpSubCode = body.error.httpSubCode;
      const errMsg = {
        message: body.error.mesage,
        subCode: body.error.subCode,
        responseBody:body,
      };
      if(httpSubCode) {
        return Observable.throw(httpSubCode);
      }
      return Observable.throw(errMsg);
      }
  };
  
   //populate movies 
    public getMovies = (): Observable<any> => {
    return this.http.get(this.moviePath)
        .map(this.extractData)
    .catch(this.handleError);
    };
    
  //populate gentres
    public getGenres = (): Observable<any> => {
      return this.http.get(this.genrePath)
        .map(this.extractData)
        .catch(this.handleError);
    }
    
  }


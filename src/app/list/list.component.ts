import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MoviesService } from '../services/movies.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent implements OnInit, OnDestroy {
  public movies:Array<any>;
  public category:string;

  constructor(private moviesService:MoviesService) {
    this.movies = [];
  }

  public ngOnInit():void {
    this.initMovieList();
  }

  ngOnDestroy():void {
  }


  public initMovieList = ():Subscription => {
    return this.moviesService.getMovies().subscribe(
      (res) => {
        console.log(res);
        this.movies.push(res.results);
      },
      (err) => {
        //handle error
        console.log(err);
      });

  }

}


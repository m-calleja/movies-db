import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import {Subscription} from 'rxjs/Subscription';
import {Router} from '@angular/router';



@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  public genres:Array<any>;
  public movies:Array<any>;
  public currentGenre:any;
  public currentMovie: any;
  public pageTitle: string;


  constructor(
    private moviesService: MoviesService,
    private router:Router)
  {
    this.movies = [];
    this.currentGenre =  {
      name: 'All',
      id: 0,
    };
  }

  //populate genre & movie list on app init
  public ngOnInit(): void {
    this.initGenreList();
    this.initMovieList();
  }
//generate genre dynamically
  public initGenreList = (): Subscription => {
    return this.moviesService.getGenres().subscribe(
      (res) => {
        this.genres = res.genres;
        console.log(this.genres);
      },
      (err) => {
        //handle error
        console.log(err);
      });
    };
  //populate movie list
  public initMovieList = (): Subscription => {
    return this.moviesService.getMovies().subscribe(
      (res) => {
        console.log(res);
        this.movies.push(res.results);
      },
      (err) => {
        //error handling
        console.log(err);
      });
  };
  //set current genre on tabclick
  public tabClick = (genre: any):void => {
  this.currentGenre = genre;

    if(this.currentGenre == 'All') {
      this.currentGenre = {
        name: 'All',
        id: 0,
      };
    }
    this.pageTitle = this.currentGenre.name;
    this.router.navigate(['/movies' , { cat: this.currentGenre.name}])
  }
;
  public movieClick = (movie: any): void => {
    this.currentGenre = movie;
    this.pageTitle = movie.title;
    this.router.navigate(['/movies', {cat: this.currentGenre.name, mov:movie.id}])
  }

}





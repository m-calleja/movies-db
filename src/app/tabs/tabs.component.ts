import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../services/movies.service';
import {Subscription} from 'rxjs/Subscription';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  public genres: Array<any>;
  public movies: Array<any>;
  public movie: any;
  public currentGenre: any;
  public currentMovie: any;
  public pageTitle: string;
  public movieOverview: string;
  public movieVote: number;
  public moviePopularity: number;
  public movieRelease: string;



  constructor(
    private moviesService: MoviesService,
    private router: Router
  ) {
    this.movies = [];
    
// initialising movie desc variables
    this.movie = {
      title: '',
      overview: '',
      popularity: '',
      vote_average: '',
      reease_date: ''
    };
    this.currentGenre = {
      name: 'All',
      id: 0,
    };
  }
//executing genre & movie population methods
  public ngOnInit(): void {
    this.initGenreList();
    this.initMovieList();

  }
//mapping api genres to object through movie service
  public initGenreList = (): Subscription => {
    return this.moviesService.getGenres().subscribe(
      (res) => {
        this.genres = res.genres;
      },
      (err) => {
        // handle the error here
        console.log(err);
      });
  };
//mapping api movies to object through movie service
  public initMovieList = (): Subscription => {
    return this.moviesService.getMovies().subscribe(
      (res) => {
        this.movies.push(res.results);
      },
      (err) => {
        // handle the error here
        console.log(err);
      });
  }
//method fired on genre tab click
  public tabClick = (genre: any): void => {
    this.currentGenre = genre;
    this.currentMovie = '';

    if (this.currentGenre === 'All') {
      this.currentGenre = {
        name: 'All',
        id: 0,
      };
    }

    this.pageTitle = this.currentGenre.name;
    this.router.navigate(['/movies', { cat: this.currentGenre.name }]);
  }
//method fired on movie more detail button click
  public movieClick = (movie: any): void => {
    this.currentMovie = movie;
    this.pageTitle = movie.title;
    this.movieOverview = movie.overview;
    this.movieVote = movie.vote_average;
    this.moviePopularity = movie.popularity;
    this.movieRelease = movie.release_date;
    this.router.navigate(['/movies', { cat: this.currentGenre.name, mov: movie.id}]);
  }

}



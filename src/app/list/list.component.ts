import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HTTPTestService } from '../services/http-test.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent implements OnInit, OnDestroy {
  movies = [];
  activatedRoute: ActivatedRoute;
  loadedCat = 'all';
  subscription;

  constructor(activatedRoute: ActivatedRoute, private httpService: HTTPTestService) {
    this.activatedRoute = activatedRoute;
    this.httpService = httpService;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.movies = this.httpService.getMovies(params.cat);
        this.loadedCat = params.cat;
      }
    );
    this.subscription = this.httpService.moviesChanged.subscribe(
      () => {
        this.movies = this.httpService.getMovies(this.loadedCat);
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}


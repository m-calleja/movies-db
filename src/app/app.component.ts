import { Component } from '@angular/core';
import {HTTPTestService} from './services/http-test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  httpService: HTTPTestService;

  constructor (httpService: HTTPTestService) {
    this.httpService = httpService;
  }

  ngOnInit() {
    this.httpService.fetchMovies();
  }
}

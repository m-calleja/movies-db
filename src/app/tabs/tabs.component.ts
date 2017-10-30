import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  //fake array pop
  movies = [
    { name: 'movie 1', cat: '' },
    { name: 'movie 2', cat: '' }
  ];
  chosenList = 'all';

  constructor() { }

  ngOnInit() {
  }
//category invoke set function
  onChoose(cat) {
    this.chosenList = cat;
  }
  
//category population by category or all
  getMovies() {
    if (this.chosenList === 'all') {
      return this.movies.slice();
    }
    return this.movies.filter((mov) => {
      return mov.cat === this.chosenList;
    })
  }

  onSideChosen(movInfo) {
    const pos = this.movies.findIndex((mov) => {
      return mov.name === movInfo.name;
    })
    this.movies[pos].cat = movInfo.cat;
  }
}



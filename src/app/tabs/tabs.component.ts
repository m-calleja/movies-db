import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  //fake array pop
  movies = [
    { name: 'movie 1', cat: 'category 1' },
    { name: 'movie 2', cat: 'category 2' }
  ];
  chosenList = 'all';

  constructor() { }

  ngOnInit() {
  }
//category invoke set function
  onChoose(cat) {
    this.chosenList = cat;
  }

//movie population by category or all
  getMovies() {
    if (this.chosenList === 'all') {
      return this.movies.slice();
    }
    return this.movies.filter((mov) => {
      return mov.cat === this.chosenList;
    })
  }
}



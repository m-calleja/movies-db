import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  movies = [
    { name: 'movie 1', side: '' },
    { name: 'movie 2', side: '' }
  ];
  chosenList = 'all';

  constructor() { }

  ngOnInit() {
  }

  onChoose(side) {
    this.chosenList = side;
  }


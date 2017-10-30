import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() movies;
  @Output() catAssigned = new EventEmitter<{name: string, cat: string}>();

  constructor() { }

  ngOnInit() {
  }

  onAssign(cat) {
    // this.movies.cat = cat;
    this.catAssigned.emit({name: this.movies.name, cat: cat});
  }
}


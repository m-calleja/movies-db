import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

//emmit output throughout components
export class ListComponent implements OnInit {
  @Input() movies;
  @Output() catAssigned = new EventEmitter<{name: string, cat: string}>();

  constructor() { }

  ngOnInit() {
  }


  onCatAssigned(movInfo) {
    this.catAssigned.emit(movInfo);
  }

}


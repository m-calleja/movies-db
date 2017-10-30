import { Component, OnInit, Input,} from '@angular/core';
import {HTTPTestService} from '../services/http-test.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {
  @Input() movie;

  constructor(private httpService : HTTPTestService) {
    this.httpService = httpService;
  }

  ngOnInit() {

  }


}


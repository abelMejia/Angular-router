import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/app/mock-heroes';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  heroes = HEROES;
  constructor() { }

  ngOnInit(): void {}

}

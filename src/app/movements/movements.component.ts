import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abanca-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.css']
})
export class MovementsComponent implements OnInit {
  public movements = [
    { description: 'mercadona', amount: 25.45 },
    { description: 'zara', amount: 75.99 },
    { description: 'amazon', amount: 33.12 }
  ];
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abanca-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  title = 'Balance F4 (top-bar.ts)';
  constructor() { }

  ngOnInit() {
  }

}

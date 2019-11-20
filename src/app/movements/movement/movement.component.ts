import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'abanca-movement',
  templateUrl: './movement.component.html',
  styleUrls: ['./movement.component.css']
})
export class MovementComponent implements OnInit {
  public movementDescription: string;
  constructor(activatedRoute: ActivatedRoute) {
  this.movementDescription = activatedRoute.snapshot.params.id;
   }

  ngOnInit() {
  }

}

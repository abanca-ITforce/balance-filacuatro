import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'abanca-movement',
  templateUrl: './movement.component.html',
  styleUrls: ['./movement.component.css']
})
export class MovementComponent implements OnInit {
  public movementDescription: string;
  /* Podriamos recibir in Id y tener aqui replicado el array, a traves de ese id acceder a sus ppiedades */
  constructor(activatedRoute: ActivatedRoute) {
  this.movementDescription = activatedRoute.snapshot.params.id;
   }

  ngOnInit() {
  }

}

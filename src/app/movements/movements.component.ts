import { Component, OnInit } from '@angular/core';
import { FormMovementService } from '../new-movement/form-movement/form-movement.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'abanca-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.css']
})
export class MovementsComponent implements OnInit {
  movementsList$: Observable<any[]>;
  movementsList = this.formMovementService.movementsList;
  constructor(private formMovementService: FormMovementService) {
    this.movementsList$ = this.formMovementService.getMovement$();
  }

  ngOnInit() {
  }

}

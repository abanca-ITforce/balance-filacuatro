import { Component, OnInit } from '@angular/core';
import { FormMovementService } from '../new-movement/form-movement/form-movement.service';

@Component({
  selector: 'abanca-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.css']
})
export class MovementsComponent implements OnInit {
  movementsList = this.formMovementService.movementsList;
  constructor(private formMovementService: FormMovementService) { }

  ngOnInit() {
  }

}
